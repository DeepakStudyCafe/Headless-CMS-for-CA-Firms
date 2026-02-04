#!/bin/bash

# SSL Setup Script using Let's Encrypt (Certbot)
# Run this after your domains are pointed to the server

echo "🔒 Setting up SSL certificates with Let's Encrypt..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if certbot is installed
if ! command -v certbot &> /dev/null; then
    print_status "Installing Certbot..."
    # For Ubuntu/Debian
    if command -v apt-get &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y certbot python3-certbot-nginx
    # For CentOS/RHEL
    elif command -v yum &> /dev/null; then
        sudo yum install -y epel-release
        sudo yum install -y certbot python3-certbot-nginx
    else
        print_error "Please install certbot manually for your system"
        exit 1
    fi
fi

# Array of your domains (update these with your actual domains)
DOMAINS=(
    "admin.yourdomain.com"
    "api.yourdomain.com"
    "firm1.yourdomain.com"
    "firm2.yourdomain.com"
    "firm3.yourdomain.com"
    "firm4.yourdomain.com"
    "firm5.yourdomain.com"
    "firm6.yourdomain.com"
)

print_warning "Please update the DOMAINS array in this script with your actual domain names before running!"
print_warning "Make sure all domains are pointing to this server's IP address."
read -p "Have you updated the domains and DNS records? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_error "Please update the domains first, then re-run this script."
    exit 1
fi

# Stop Nginx in Docker to free up port 80
print_status "Stopping Nginx container temporarily..."
docker-compose stop nginx

# Generate certificates for each domain
for domain in "${DOMAINS[@]}"; do
    print_status "Generating certificate for $domain..."
    
    certbot certonly --standalone \
        --non-interactive \
        --agree-tos \
        --email your-email@domain.com \
        --domains $domain
        
    if [ $? -eq 0 ]; then
        print_status "✅ Certificate generated for $domain"
        
        # Copy certificates to nginx/ssl directory
        sudo cp /etc/letsencrypt/live/$domain/fullchain.pem ./nginx/ssl/$domain.crt
        sudo cp /etc/letsencrypt/live/$domain/privkey.pem ./nginx/ssl/$domain.key
        sudo chown $USER:$USER ./nginx/ssl/$domain.*
        
    else
        print_error "❌ Failed to generate certificate for $domain"
    fi
done

# Create SSL-enabled Nginx configuration
print_status "Creating SSL-enabled Nginx configuration..."

cat > ./nginx/conf.d/ssl.conf << 'EOF'
# Rate limiting zones
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=auth:10m rate=5r/m;

# Upstream backend
upstream backend {
    server backend:5000;
    keepalive 32;
}

# Admin Dashboard - HTTP to HTTPS redirect
server {
    listen 80;
    server_name admin.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

# Admin Dashboard - HTTPS
server {
    listen 443 ssl http2;
    server_name admin.yourdomain.com;
    
    ssl_certificate /etc/nginx/ssl/admin.yourdomain.com.crt;
    ssl_certificate_key /etc/nginx/ssl/admin.yourdomain.com.key;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Rate limiting
    limit_req zone=general burst=20 nodelay;
    
    location / {
        proxy_pass http://admin-dashboard:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}

# API Backend - HTTP to HTTPS redirect
server {
    listen 80;
    server_name api.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

# API Backend - HTTPS
server {
    listen 443 ssl http2;
    server_name api.yourdomain.com;
    
    ssl_certificate /etc/nginx/ssl/api.yourdomain.com.crt;
    ssl_certificate_key /etc/nginx/ssl/api.yourdomain.com.key;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Rate limiting for API
    limit_req zone=general burst=50 nodelay;
    
    location ~* /api/(auth|login) {
        limit_req zone=auth burst=3 nodelay;
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # CORS headers
        add_header Access-Control-Allow-Origin $http_origin always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization" always;
        add_header Access-Control-Allow-Credentials true always;
        
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
    
    client_max_body_size 10M;
}

# Firm websites with SSL (add similar blocks for all 6 firms)
# Update the server names with your actual domains

# Default server block for HTTPS
server {
    listen 443 ssl default_server;
    server_name _;
    ssl_certificate /etc/nginx/ssl/admin.yourdomain.com.crt;
    ssl_certificate_key /etc/nginx/ssl/admin.yourdomain.com.key;
    return 444;
}
EOF

print_status "SSL configuration created. Please update the server names in nginx/conf.d/ssl.conf"

# Rename the old config
mv ./nginx/conf.d/default.conf ./nginx/conf.d/default.conf.backup

# Start Nginx with SSL
print_status "Starting Nginx with SSL configuration..."
docker-compose up -d nginx

# Set up auto-renewal
print_status "Setting up auto-renewal..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

print_status "🎉 SSL setup completed!"
print_warning "Please update all domain names in nginx/conf.d/ssl.conf with your actual domains"
print_status "Auto-renewal is set up to run daily at 12:00 PM"