#!/bin/bash

# VPS Deployment Script for Headless CMS (Without Docker)
# Run this script on your VPS to deploy the application

set -e  # Exit on any error

echo "🚀 Starting VPS deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js (v18 or later) first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    print_error "PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

# Check if Redis is installed
if ! command -v redis-server &> /dev/null; then
    print_error "Redis is not installed. Please install Redis first."
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Check if .env.production file exists
if [ ! -f ".env.production" ]; then
    print_error ".env.production file not found!"
    print_warning "Please copy .env.production.example to .env.production and update the values."
    exit 1
fi

# Load environment variables
set -a
source .env.production
set +a

print_status "Environment loaded from .env.production"

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p uploads/resumes
mkdir -p logs

# Install all dependencies
print_status "Installing dependencies for all projects..."
npm run install:all

# Build all projects
print_status "Building all projects..."
npm run build:all

# Setup PostgreSQL database
print_status "Setting up PostgreSQL database..."
sudo -u postgres psql -c "CREATE DATABASE ${POSTGRES_DB:-enterprise_cms};" || print_warning "Database might already exist"
sudo -u postgres psql -c "CREATE USER ${POSTGRES_USER:-postgres} WITH PASSWORD '${POSTGRES_PASSWORD}';" || print_warning "User might already exist"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${POSTGRES_DB:-enterprise_cms} TO ${POSTGRES_USER:-postgres};" || print_warning "Privileges might already be granted"

# Run database migrations
print_status "Running database migrations..."
cd backend
npx prisma migrate deploy
npx prisma generate
cd ..

# Stop existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Start Redis server if not running
print_status "Starting Redis server..."
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Start PostgreSQL if not running
print_status "Starting PostgreSQL..."
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Start backend with PM2
print_status "Starting backend service with PM2..."
pm2 start backend/src/server.js --name "cms-backend" --cwd backend

# Start admin dashboard with PM2
print_status "Starting admin dashboard with PM2..."
cd admin-dashboard
pm2 start npm --name "cms-admin" -- start
cd ..

# Start all firm websites with PM2
print_status "Starting firm websites with PM2..."
cd websites/firm1-sharma
pm2 start npm --name "cms-firm1" -- start
cd ../..

cd websites/firm2-verma  
pm2 start npm --name "cms-firm2" -- start
cd ../..

cd websites/firm3-gupta
pm2 start npm --name "cms-firm3" -- start
cd ../..

cd websites/firm4-kapoor
pm2 start npm --name "cms-firm4" -- start
cd ../..

cd websites/firm5-singh
pm2 start npm --name "cms-firm5" -- start
cd ../..

cd websites/firm6-patel
pm2 start npm --name "cms-firm6" -- start
cd ../..

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save
pm2 startup

# Show status
print_status "Checking service health..."
pm2 status

# Test services
print_status "Testing service endpoints..."

# Wait for services to start
sleep 10

# Test backend health
if curl -f http://localhost:5000/health > /dev/null 2>&1; then
    print_status "✅ Backend is healthy"
else
    print_warning "⚠️  Backend health check failed"
fi

# Test admin dashboard
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    print_status "✅ Admin dashboard is running"
else
    print_warning "⚠️  Admin dashboard is not responding"
fi

# Test websites
for i in {1..6}; do
    port=$((3000 + i))
    if curl -f http://localhost:$port > /dev/null 2>&1; then
        print_status "✅ Website on port $port is running"
    else
        print_warning "⚠️  Website on port $port is not responding"
    fi
done

print_status "🎉 VPS Deployment completed!"
echo ""
print_status "Services are running on the following URLs:"
echo "  - Admin Dashboard: http://72.62.243.99:3000"
echo "  - API Backend: http://72.62.243.99:5000"
echo "  - Firm 1 (Sharma): http://72.62.243.99:3001"
echo "  - Firm 2 (Verma): http://72.62.243.99:3002"
echo "  - Firm 3 (Gupta): http://72.62.243.99:3003"
echo "  - Firm 4 (Kapoor): http://72.62.243.99:3004"
echo "  - Firm 5 (Singh): http://72.62.243.99:3005"
echo "  - Firm 6 (Patel): http://72.62.243.99:3006"
echo ""
print_status "To view logs: pm2 logs [service_name]"
print_status "To stop all services: pm2 stop all"
print_status "To restart a service: pm2 restart [service_name]"
print_status "To monitor services: pm2 monit"

echo ""
print_warning "To setup Nginx reverse proxy (RECOMMENDED):"
echo "1. sudo cp nginx-vps.conf /etc/nginx/sites-available/cms"
echo "2. sudo ln -s /etc/nginx/sites-available/cms /etc/nginx/sites-enabled/"
echo "3. sudo rm /etc/nginx/sites-enabled/default"
echo "4. sudo nginx -t"
echo "5. sudo systemctl restart nginx"
echo ""
print_warning "After Nginx setup, access via:"
echo "   - Main Site: http://72.62.243.99 (Admin + API)"
echo "   - Firm Sites: http://72.62.243.99:3001 to 3006"

# Setup firewall
print_status "Setting up firewall..."
sudo ufw allow 22/tcp              # SSH
sudo ufw allow 80/tcp              # HTTP
sudo ufw allow 443/tcp             # HTTPS
sudo ufw allow 3000/tcp            # Admin Dashboard
sudo ufw allow 3001:3006/tcp       # Firm Websites
sudo ufw allow 5000/tcp            # API Backend
sudo ufw allow 5432/tcp            # PostgreSQL (if remote access needed)
sudo ufw allow 6379/tcp            # Redis (if remote access needed)
sudo ufw --force enable

echo ""
print_warning "Next steps for production:"
echo "1. Set up Nginx as reverse proxy for your domains"
echo "2. Set up SSL certificates with Let's Encrypt"
echo "3. Update DNS records to point to this server"
echo "4. Configure automated backups for PostgreSQL data"
echo "5. Set up monitoring and logging"
echo "6. Update .env.production with your actual domain names"