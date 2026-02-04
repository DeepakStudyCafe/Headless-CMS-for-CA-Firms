#!/bin/bash

# Quick Start Script for Headless CMS Docker Setup
# This script sets up everything needed for production deployment

set -e

echo "🚀 Headless CMS - Quick Setup Script"
echo "===================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_status() { echo -e "${GREEN}[INFO]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons."
   exit 1
fi

print_status "Step 1: Checking prerequisites..."

# Check Docker
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed."
    print_status "Installing Docker..."
    
    # Install Docker (Ubuntu/Debian)
    if command -v apt-get &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
        sudo usermod -aG docker $USER
        print_warning "Please log out and log back in for Docker permissions to take effect."
    else
        print_error "Automatic Docker installation not supported for your OS. Please install Docker manually."
        exit 1
    fi
fi

# Check Docker Compose
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    print_status "Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

print_status "✅ Prerequisites check completed"

print_status "Step 2: Setting up environment..."

# Create .env.production if it doesn't exist
if [ ! -f ".env.production" ]; then
    cp .env.production.example .env.production
    print_warning "Created .env.production file. Please edit it with your actual values:"
    echo "  - Database passwords"
    echo "  - JWT secret"
    echo "  - Email configuration"
    echo "  - Domain names"
    echo ""
    read -p "Press Enter to continue after editing .env.production file..."
fi

print_status "Step 3: Setting up directories..."
mkdir -p nginx/ssl
mkdir -p nginx/logs
mkdir -p init-scripts

print_status "Step 4: Setting up firewall (if ufw is available)..."
if command -v ufw &> /dev/null; then
    sudo ufw allow 22/tcp   # SSH
    sudo ufw allow 80/tcp   # HTTP
    sudo ufw allow 443/tcp  # HTTPS
    print_status "Firewall rules added for ports 22, 80, 443"
fi

print_status "Step 5: Starting deployment..."

# Make deploy script executable and run it
chmod +x deploy.sh
./deploy.sh

print_status "🎉 Initial setup completed!"
echo ""
print_status "Next steps:"
echo "1. Update nginx/conf.d/default.conf with your actual domain names"
echo "2. Point your domains to this server's IP address"
echo "3. Run ./setup-ssl.sh to enable HTTPS (after DNS is configured)"
echo "4. Test your websites and admin dashboard"
echo ""
print_status "Your services are now running:"
echo "  - Admin Dashboard: http://$(hostname -I | cut -d' ' -f1):3000"
echo "  - API Backend: http://$(hostname -I | cut -d' ' -f1):5000"
echo "  - Websites: http://$(hostname -I | cut -d' ' -f1):3001-3006"
echo ""
print_warning "Remember to:"
echo "  - Change default passwords in .env.production"
echo "  - Set up regular database backups"
echo "  - Monitor logs: docker-compose logs -f"
echo "  - Update your applications regularly"