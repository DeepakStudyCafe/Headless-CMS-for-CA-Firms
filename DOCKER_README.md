# 🚀 Headless CMS - Production Docker Setup

Complete Docker-based deployment solution for the CA firm websites management system.

## 🏗️ Architecture

- **Backend**: Node.js/Express API server with PostgreSQL
- **Admin Dashboard**: Next.js application for content management
- **6 Firm Websites**: Individual Next.js applications for each CA firm
- **Database**: PostgreSQL with Redis cache
- **Reverse Proxy**: Nginx with SSL support
- **Security**: Containerized with non-root users, health checks, rate limiting

## 📋 Prerequisites

- Docker and Docker Compose installed
- VPS/Server with at least 4GB RAM
- Domain names pointing to your server
- Basic knowledge of Docker and Nginx

## 🚀 Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.production.example .env.production

# Edit with your actual values
nano .env.production
```

**Required Environment Variables:**
```env
POSTGRES_PASSWORD=your_secure_database_password
REDIS_PASSWORD=your_secure_redis_password
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
EMAIL_USER=your_email@domain.com
EMAIL_PASS=your_email_password
```

### 2. Deploy (Linux/Mac)

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 3. Deploy (Windows)

```powershell
# Run PowerShell as Administrator
.\deploy.ps1

# For clean deployment (rebuild everything)
.\deploy.ps1 -Clean
```

### 4. Update Domain Configuration

Edit `nginx/conf.d/default.conf` and replace all instances of `yourdomain.com` with your actual domains:

```nginx
# Update these domains
admin.yourdomain.com → admin.yourrealdomain.com
api.yourdomain.com → api.yourrealdomain.com
firm1.yourdomain.com → sharma-associates.com
# ... etc
```

### 5. SSL Setup (Optional but Recommended)

```bash
# Update domains in setup-ssl.sh first
chmod +x setup-ssl.sh
./setup-ssl.sh
```

## 🔧 Manual Deployment Steps

### 1. Build and Start Services

```bash
# Start database services
docker-compose up -d postgres redis

# Wait for databases to be ready
sleep 30

# Start backend
docker-compose up -d backend

# Start frontend services
docker-compose up -d admin-dashboard firm1-sharma firm2-verma firm3-gupta firm4-kapoor firm5-singh firm6-patel

# Start reverse proxy
docker-compose up -d nginx
```

### 2. Verify Deployment

```bash
# Check service status
docker-compose ps

# Check logs
docker-compose logs -f backend
docker-compose logs -f admin-dashboard

# Test endpoints
curl http://localhost:5000/health
curl http://localhost:3000
```

## 🌐 Service URLs

After deployment, services will be available on:

- **Admin Dashboard**: http://localhost:3000
- **API Backend**: http://localhost:5000
- **Firm 1 (Sharma)**: http://localhost:3001
- **Firm 2 (Verma)**: http://localhost:3002
- **Firm 3 (Gupta)**: http://localhost:3003
- **Firm 4 (Kapoor)**: http://localhost:3004
- **Firm 5 (Singh)**: http://localhost:3005
- **Firm 6 (Patel)**: http://localhost:3006

## 🔒 Security Features

- **Container Security**: Non-root users, read-only filesystems, security options
- **Network Isolation**: Separate networks for backend and frontend
- **Rate Limiting**: API and authentication endpoint protection
- **Security Headers**: HSTS, XSS protection, frame options
- **Health Checks**: Container health monitoring
- **SSL Support**: Let's Encrypt integration ready

## 📊 Monitoring and Maintenance

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f nginx
```

### Restart Services
```bash
# Restart specific service
docker-compose restart backend

# Restart all
docker-compose restart
```

### Update Application
```bash
# Pull latest code
git pull

# Rebuild and redeploy
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Database Backup
```bash
# Create backup
docker-compose exec postgres pg_dump -U postgres enterprise_cms > backup_$(date +%Y%m%d).sql

# Restore backup
docker-compose exec -i postgres psql -U postgres enterprise_cms < backup_file.sql
```

## 🔧 Configuration Files

### Docker Files
- `backend/Dockerfile` - Backend API container
- `admin-dashboard/Dockerfile` - Admin dashboard container
- `websites/*/Dockerfile` - Individual website containers
- `docker-compose.yml` - Main orchestration file

### Nginx Configuration
- `nginx/conf.d/default.conf` - HTTP configuration
- `nginx/conf.d/ssl.conf` - HTTPS configuration (created by SSL setup)

### Environment Files
- `.env.production` - Production environment variables
- `.env.production.example` - Template for environment setup

## 🚨 Troubleshooting

### Container Won't Start
```bash
# Check container logs
docker-compose logs [service_name]

# Check container status
docker-compose ps

# Restart specific service
docker-compose restart [service_name]
```

### Database Connection Issues
```bash
# Check database logs
docker-compose logs postgres

# Test database connection
docker-compose exec postgres psql -U postgres -d enterprise_cms -c "SELECT 1;"

# Restart database
docker-compose restart postgres
```

### Port Conflicts
```bash
# Check which process is using a port
netstat -tulpn | grep :3000

# Stop conflicting services
sudo systemctl stop nginx  # If system nginx is running
```

### SSL Issues
```bash
# Check certificate validity
openssl x509 -in nginx/ssl/yourdomain.com.crt -text -noout

# Test SSL connection
curl -I https://yourdomain.com

# Renew certificates manually
certbot renew
```

## 📈 Performance Optimization

### Resource Limits
Add resource limits to `docker-compose.yml`:

```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```

### Nginx Optimization
Update `nginx/conf.d/default.conf`:

```nginx
# Add gzip compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

# Add caching
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🔄 CI/CD Integration

The setup is ready for CI/CD integration. Common patterns:

1. **GitHub Actions**: Build and push images on code changes
2. **Webhook Deployment**: Auto-deploy when images are updated
3. **Rolling Updates**: Zero-downtime deployments

## 📞 Support

For issues or questions:
1. Check logs: `docker-compose logs -f [service]`
2. Verify configuration: `docker-compose config`
3. Test connectivity: `curl -I http://localhost:5000/health`

## 📝 License

This project is licensed under the MIT License.