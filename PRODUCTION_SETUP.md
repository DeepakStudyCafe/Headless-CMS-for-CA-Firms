# 🚀 Complete Production Setup Guide

## Step-by-Step Production Deployment

### 1. **Environment Configuration**

```bash
# Copy the environment template
cp .env.production.example .env.production
```

**Edit `.env.production` and update ALL these values:**

#### 🔐 **Critical Security Settings (MUST CHANGE!):**
```env
POSTGRES_PASSWORD=your_ultra_secure_db_password_here
REDIS_PASSWORD=your_ultra_secure_redis_password_here  
JWT_SECRET=your_super_long_random_jwt_secret_minimum_32_characters
```

#### 📧 **Main Email Configuration:**
```env
EMAIL_USER=your_sender_email@gmail.com
EMAIL_PASS=your_app_password_or_email_password
EMAIL_FROM_NAME=Your Company Contact Form
```

#### 🏢 **Individual Firm Email Configuration:**
```env
FIRM1_EMAIL=sharma.associates@gmail.com
FIRM1_NAME=Sharma & Associates
FIRM2_EMAIL=verma.accounting@gmail.com  
FIRM2_NAME=Verma & Co
FIRM3_EMAIL=gupta.taxadvisors@gmail.com
FIRM3_NAME=Gupta Partners
FIRM4_EMAIL=kapoor.financial@gmail.com
FIRM4_NAME=Kapoor Associates
FIRM5_EMAIL=singh.partners@gmail.com
FIRM5_NAME=Singh & Partners
FIRM6_EMAIL=patel.group@gmail.com
FIRM6_NAME=Patel Group
```

#### 🌐 **Domain Configuration:**
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
ALLOWED_ORIGINS=https://admin.yourdomain.com,https://sharma-associates.com,https://vermaaccounting.com,https://guptaandco.com,https://kapoorfinancial.com,https://singhpartners.com,https://patelgroup.com

# Individual domains
ADMIN_DOMAIN=admin.yourdomain.com
API_DOMAIN=api.yourdomain.com
FIRM1_DOMAIN=sharma-associates.com
FIRM2_DOMAIN=vermaaccounting.com
FIRM3_DOMAIN=guptaandco.com
FIRM4_DOMAIN=kapoorfinancial.com
FIRM5_DOMAIN=singhpartners.com
FIRM6_DOMAIN=patelgroup.com
```

### 2. **Domain Configuration in Nginx**

Edit `nginx/conf.d/default.conf` and replace ALL domain names:

```nginx
# Find and replace these:
admin.yourdomain.com → admin.yourrealdomain.com
api.yourdomain.com → api.yourrealdomain.com
firm1.yourdomain.com → sharma-associates.com
firm2.yourdomain.com → vermaaccounting.com
# ... and so on
```

### 3. **Deploy the Application**

#### **Windows (PowerShell):**
```powershell
# Run as Administrator
.\deploy.ps1

# For complete rebuild:
.\deploy.ps1 -Clean
```

#### **Linux/Mac:**
```bash
# Quick start (installs Docker if needed)
chmod +x quick-start.sh && ./quick-start.sh

# OR manual deploy
chmod +x deploy.sh && ./deploy.sh
```

### 4. **Verify Deployment**

After deployment, check these URLs:
- **Admin Dashboard**: `http://your-server-ip:3000`
- **API Backend**: `http://your-server-ip:5000/health`
- **Websites**: `http://your-server-ip:3001-3006`

### 5. **DNS Configuration**

Point your domains to your server's IP address:

```
A Record: admin.yourdomain.com → Your Server IP
A Record: api.yourdomain.com → Your Server IP
A Record: sharma-associates.com → Your Server IP
A Record: vermaaccounting.com → Your Server IP
A Record: guptaandco.com → Your Server IP
A Record: kapoorfinancial.com → Your Server IP
A Record: singhpartners.com → Your Server IP
A Record: patelgroup.com → Your Server IP
```

### 6. **SSL Setup (HTTPS)**

```bash
# Edit domains in setup-ssl.sh first
nano setup-ssl.sh

# Update the DOMAINS array with your actual domains
DOMAINS=(
    "admin.yourdomain.com"
    "api.yourdomain.com"
    "sharma-associates.com"
    # ... add all your domains
)

# Run SSL setup
chmod +x setup-ssl.sh && ./setup-ssl.sh
```

### 7. **Final Verification**

Test all your websites:
```bash
curl -I https://admin.yourdomain.com
curl -I https://api.yourdomain.com/health
curl -I https://sharma-associates.com
# ... test all domains
```

## 📋 **What Each Component Does:**

### **Backend (Port 5000)**
- Handles all API requests
- Manages database operations
- Processes form submissions
- Sends emails to appropriate firm emails

### **Admin Dashboard (Port 3000)**
- Content management interface
- Website configuration
- User authentication

### **6 Firm Websites (Ports 3001-3006)**
- Individual CA firm websites
- Each has unique branding and content
- Forms submit to backend with firm identification

### **Email Flow:**
1. User fills form on any website
2. Form submits to backend with `website` parameter
3. Backend identifies which firm (firm1-sharma, firm2-verma, etc.)
4. Email sent to corresponding firm's email address
5. Email subject includes firm name for easy identification

## 🔧 **Production Management:**

### View Logs:
```bash
docker-compose logs -f backend
docker-compose logs -f admin-dashboard
docker-compose logs -f nginx
```

### Restart Services:
```bash
docker-compose restart backend
docker-compose restart nginx
```

### Database Backup:
```bash
# Create backup
docker-compose exec postgres pg_dump -U postgres enterprise_cms > backup_$(date +%Y%m%d).sql

# Restore backup  
docker-compose exec -i postgres psql -U postgres enterprise_cms < backup_file.sql
```

### Update Application:
```bash
# Pull latest code
git pull

# Rebuild and deploy
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🛠️ **Common Issues & Solutions:**

### **Email Not Working:**
1. Check email credentials in `.env.production`
2. Use App Password for Gmail (not regular password)
3. Verify firm email addresses are correct

### **Domain Not Accessible:**
1. Check DNS propagation: `nslookup yourdomain.com`
2. Verify nginx configuration
3. Check firewall: `sudo ufw status`

### **SSL Certificate Issues:**
1. Verify domain ownership
2. Check Let's Encrypt rate limits
3. Ensure port 80 is accessible

### **Performance Issues:**
1. Monitor resources: `docker stats`
2. Check database connections
3. Verify Redis cache is working

---

**🎉 Congratulations!** Your complete CA firm management system is now live with:
- ✅ 6 separate firm websites
- ✅ Centralized admin dashboard  
- ✅ Individual email routing per firm
- ✅ SSL encryption
- ✅ Production-ready security
- ✅ Automated deployment