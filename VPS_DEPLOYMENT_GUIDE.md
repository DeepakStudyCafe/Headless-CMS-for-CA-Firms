# VPS Deployment Guide for Headless CMS

This guide will help you deploy the Headless CMS system on VPS **72.62.243.99** without Docker.

## Prerequisites

Before starting the deployment, ensure your VPS has the following:

- Ubuntu 20.04 LTS or later (or CentOS 8+)
- At least 4GB RAM
- At least 20GB disk space
- Root or sudo access
- VPS IP: **72.62.243.99**

## Step 1: Set Up Your VPS

### 1.1 Update the system
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Install required packages
```bash
sudo apt install -y curl wget git unzip software-properties-common ufw
```

## Step 2: Install Node.js and NPM

### 2.1 Install Node.js (v18 LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2.2 Verify installation
```bash
node --version
npm --version
```

## Step 3: Install PostgreSQL

### 3.1 Install PostgreSQL
```bash
sudo apt install -y postgresql postgresql-contrib
```

### 3.2 Start and enable PostgreSQL
```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 3.3 Secure PostgreSQL installation
```bash
sudo -u postgres psql
\password postgres
\q
```

## Step 4: Install Redis

### 4.1 Install Redis
```bash
sudo apt install -y redis-server
```

### 4.2 Configure Redis (optional - for security)
```bash
sudo nano /etc/redis/redis.conf
# Find and uncomment: requirepass your_redis_password
```

### 4.3 Start and enable Redis
```bash
sudo systemctl start redis-server
sudo systemctl enable redis-server
```

## Step 5: Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

## Step 6: Install Nginx (For reverse proxy)

### 6.1 Install Nginx
```bash
sudo apt install -y nginx
```

### 6.2 Start and enable Nginx
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Step 7: Deploy Your Application

### 7.1 Clone your repository
```bash
cd /opt
sudo git clone https://github.com/DeepakStudyCafe/Headless-CMS-for-CA-Firms.git cms
sudo chown -R $USER:$USER cms
cd cms
```

### 7.2 Set up environment file
```bash
cp .env.production.example .env.production
nano .env.production
```

Update the following values in `.env.production`:
- `POSTGRES_PASSWORD`: Your PostgreSQL password
- `REDIS_PASSWORD`: Your Redis password (if set)
- `JWT_SECRET`: A secure random string (at least 32 characters)
- `ALLOWED_ORIGINS`: Your actual domain names
- Email settings with your SMTP credentials
- Domain names for each firm

### 7.3 Run deployment script
```bash
chmod +x deploy-vps.sh
./deploy-vps.sh
```

## Step 8: Set Up Nginx Reverse Proxy

### 8.1 Use the provided Nginx configuration
The project includes a pre-configured nginx file for your VPS IP (72.62.243.99).

```bash
sudo cp nginx-vps.conf /etc/nginx/sites-available/cms
```

**Or** create your own configuration:
```bash
sudo nano /etc/nginx/sites-available/cms
```

Add the following configuration (replace `yourdomain.com` with your actual domains):

```nginx
# Admin Dashboard
server {
    listen 80;
    server_name admin.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
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

# API Backend
server {
    listen 80;
    server_name api.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 1 - Sharma
server {
    listen 80;
    server_name sadgurushakti.org www.sadgurushakti.org;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 2 - Verma
server {
    listen 80;
    server_name automatepractice.com www.automatepractice.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 3 - Gupta
server {
    listen 80;
    server_name capracticeautomation.com www.capracticeautomation.com;
    
    location / {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 4 - Kapoor
server {
    listen 80;
    server_name growthcafe.in www.growthcafe.in;
    
    location / {
        proxy_pass http://localhost:3004;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 5 - Singh
server {
    listen 80;
    server_name digitechai.in www.digitechai.in;
    
    location / {
        proxy_pass http://localhost:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Firm 6 - Patel
server {
    listen 80;
    server_name cadeepakgupta.com www.cadeepakgupta.com;
    
    location / {
        proxy_pass http://localhost:3006;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 8.2 Enable the site
```bash
sudo ln -s /etc/nginx/sites-available/cms /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 9: Set Up SSL with Let's Encrypt (Recommended)

### 9.1 Install Certbot
```bash
sudo apt install -y snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### 9.2 Obtain SSL certificates
```bash
sudo certbot --nginx -d admin.yourdomain.com -d api.yourdomain.com -d sadgurushakti.org -d automatepractice.com -d capracticeautomation.com -d growthcafe.in -d digitechai.in -d cadeepakgupta.com
```

### 9.3 Set up auto-renewal
```bash
sudo systemctl enable snap.certbot.renew.timer
```

## Step 10: Configure Firewall

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw --force enable
```

## Step 11: Set Up Monitoring and Backups

### 11.1 Set up database backup script
```bash
sudo nano /opt/cms/backup.sh
```

Add:
```bash
#!/bin/bash
DATE=$(date +"%Y%m%d_%H%M%S")
sudo -u postgres pg_dump enterprise_cms > /opt/cms/backups/db_backup_$DATE.sql
# Keep only last 7 days
find /opt/cms/backups -name "db_backup_*.sql" -mtime +7 -delete
```

### 11.2 Make it executable and add to cron
```bash
chmod +x /opt/cms/backup.sh
mkdir -p /opt/cms/backups
crontab -e
# Add: 0 2 * * * /opt/cms/backup.sh
```

## Step 12: Update DNS Records

Point your domains to your VPS IP address:

| Domain | Type | Value |
|--------|------|-------|
| admin.yourdomain.com | A | YOUR_VPS_IP |
| api.yourdomain.com | A | YOUR_VPS_IP |
| sadgurushakti.org | A | YOUR_VPS_IP |
| automatepractice.com | A | YOUR_VPS_IP |
| capracticeautomation.com | A | YOUR_VPS_IP |
| growthcafe.in | A | YOUR_VPS_IP |
| digitechai.in | A | YOUR_VPS_IP |
| cadeepakgupta.com | A | YOUR_VPS_IP |

## Useful Commands

### PM2 Management
```bash
pm2 status              # Check all processes
pm2 logs                # View all logs
pm2 logs cms-backend    # View specific service logs
pm2 restart all         # Restart all services
pm2 stop all            # Stop all services
pm2 delete all          # Delete all processes
pm2 monit               # Monitor resources
```

### Service Management
```bash
sudo systemctl status postgresql   # Check PostgreSQL
sudo systemctl status redis-server # Check Redis
sudo systemctl status nginx        # Check Nginx
```

### Logs
```bash
sudo tail -f /var/log/nginx/error.log   # Nginx errors
sudo journalctl -u postgresql           # PostgreSQL logs
sudo journalctl -u redis-server         # Redis logs
```

## Troubleshooting

### Common Issues

1. **Services not starting**: Check logs with `pm2 logs`
2. **Database connection issues**: Verify PostgreSQL is running and credentials are correct
3. **Port conflicts**: Ensure no other services are using ports 3000-3006 and 5000
4. **Nginx issues**: Check configuration with `sudo nginx -t`

### Performance Optimization

1. **Enable Gzip compression in Nginx**
2. **Set up Redis for caching**
3. **Optimize PostgreSQL configuration**
4. **Use CDN for static assets**

For additional support, check the application logs and ensure all environment variables are properly configured in `.env.production`.