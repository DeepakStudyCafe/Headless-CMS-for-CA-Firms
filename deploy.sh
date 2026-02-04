#!/bin/bash

# Production Deployment Script for Headless CMS
# Run this script on your VPS to deploy the application

set -e  # Exit on any error

echo "🚀 Starting production deployment..."

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

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
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
mkdir -p nginx/ssl
mkdir -p init-scripts

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans || true

# Remove old images (optional - uncomment if you want to force rebuild)
# print_status "Removing old images..."
# docker-compose down --rmi all --volumes --remove-orphans

# Pull latest images and build
print_status "Building Docker images..."
docker-compose build --no-cache

# Start database first
print_status "Starting database services..."
docker-compose up -d postgres redis

# Wait for database to be ready
print_status "Waiting for database to be ready..."
sleep 30

# Run database migrations
print_status "Running database migrations..."
docker-compose exec -T postgres psql -U ${POSTGRES_USER:-postgres} -d ${POSTGRES_DB:-enterprise_cms} -c "SELECT 1;" > /dev/null 2>&1
if [ $? -eq 0 ]; then
    print_status "Database is ready"
else
    print_error "Database is not ready. Please check the logs."
    docker-compose logs postgres
    exit 1
fi

# Start backend
print_status "Starting backend service..."
docker-compose up -d backend

# Wait for backend to be ready
print_status "Waiting for backend to be ready..."
sleep 20

# Start frontend services
print_status "Starting frontend services..."
docker-compose up -d admin-dashboard firm1-sharma firm2-verma firm3-gupta firm4-kapoor firm5-singh firm6-patel

# Start Nginx
print_status "Starting Nginx reverse proxy..."
docker-compose up -d nginx

# Show status
print_status "Checking service health..."
docker-compose ps

# Test services
print_status "Testing service endpoints..."

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

print_status "🎉 Deployment completed!"
echo ""
print_status "Services are running on the following ports:"
echo "  - Admin Dashboard: http://localhost:3000"
echo "  - API Backend: http://localhost:5000"
echo "  - Firm 1 (Sharma): http://localhost:3001"
echo "  - Firm 2 (Verma): http://localhost:3002"
echo "  - Firm 3 (Gupta): http://localhost:3003"
echo "  - Firm 4 (Kapoor): http://localhost:3004"
echo "  - Firm 5 (Singh): http://localhost:3005"
echo "  - Firm 6 (Patel): http://localhost:3006"
echo ""
print_status "To view logs: docker-compose logs -f [service_name]"
print_status "To stop all services: docker-compose down"
print_status "To restart a service: docker-compose restart [service_name]"

# Optional: Set up SSL with Let's Encrypt
echo ""
print_warning "Next steps for production:"
echo "1. Update nginx/conf.d/default.conf with your actual domain names"
echo "2. Set up SSL certificates (Let's Encrypt recommended)"
echo "3. Update DNS records to point to this server"
echo "4. Configure firewall to allow HTTP (80) and HTTPS (443) traffic"
echo "5. Set up automated backups for PostgreSQL data"
echo "6. Configure monitoring and logging"