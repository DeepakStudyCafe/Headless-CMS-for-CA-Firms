# 🚀 Quick Start Guide for VPS 72.62.243.99

This is a simplified, step-by-step guide to deploy your Headless CMS on VPS **72.62.243.99**.

## ✅ Pre-configured for Your IP

All configuration files have been updated for your VPS IP address. No need to change anything!

## 📋 Step-by-Step Deployment

### Step 1: Connect to Your VPS
```bash
ssh root@72.62.243.99
# or
ssh your_username@72.62.243.99
```

### Step 2: Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 3: Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Should show v18 or higher
```

### Step 4: Install PostgreSQL
```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Set password for postgres user
sudo -u postgres psql
\password postgres
# Enter password: Deepak123 (or your preferred password)
\q
```

### Step 5: Install Redis & Other Tools
```bash
sudo apt install -y redis-server nginx git
sudo systemctl start redis-server
sudo systemctl enable redis-server
```

### Step 6: Clone and Deploy Project
```bash
cd /opt
sudo git clone https://github.com/DeepakStudyCafe/Headless-CMS-for-CA-Firms.git cms
sudo chown -R $USER:$USER cms
cd cms

# Create environment file
cp .env.production.example .env.production

# Install PM2
sudo npm install -g pm2

# Run automated deployment
chmod +x deploy-vps.sh
./deploy-vps.sh
```

### Step 7: Setup Nginx (Optional but Recommended)
```bash
sudo cp nginx-vps.conf /etc/nginx/sites-available/cms
sudo ln -s /etc/nginx/sites-available/cms /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

## 🎯 Access Your Sites

### Without Nginx (Direct Port Access):
- **Admin Dashboard**: http://72.62.243.99:3000
- **API Backend**: http://72.62.243.99:5000
- **Firm 1 (Sharma)**: http://72.62.243.99:3001
- **Firm 2 (Verma)**: http://72.62.243.99:3002
- **Firm 3 (Gupta)**: http://72.62.243.99:3003
- **Firm 4 (Kapoor)**: http://72.62.243.99:3004
- **Firm 5 (Singh)**: http://72.62.243.99:3005
- **Firm 6 (Patel)**: http://72.62.243.99:3006

### With Nginx (Recommended):
- **Admin Dashboard + API**: http://72.62.243.99 (port 80)
- **Firm Websites**: Same as above (ports 3001-3006)

## 🔧 Useful Commands

### Check Services
```bash
pm2 status                    # Check all running services
pm2 logs                      # View all logs
pm2 logs cms-backend          # View backend logs specifically
pm2 monit                     # Real-time monitoring
```

### Restart Services
```bash
pm2 restart all               # Restart all services
pm2 restart cms-backend       # Restart backend only
pm2 restart cms-admin         # Restart admin dashboard
```

### Check Database
```bash
sudo -u postgres psql enterprise_cms
\dt                          # List tables
SELECT * FROM websites;       # View websites data
\q                           # Quit
```

### Check System Resources
```bash
htop                         # System monitor
df -h                        # Disk usage
free -h                      # Memory usage
netstat -tulpn               # Check ports
```

## 🛡️ Security Settings

### Firewall (Already configured by script)
```bash
sudo ufw status              # Check firewall status
```

### Change Default Passwords
1. **PostgreSQL**: Already set to `Deepak123` in .env.production
2. **Redis**: Change `REDIS_PASSWORD` in .env.production if needed
3. **JWT Secret**: Already set with strong random key

## 📧 Email Configuration

Update these in `.env.production` if needed:
```bash
EMAIL_USER=web@studycafe.in
EMAIL_PASS=bxbt ovrw odpm pigt
```

## 🌐 Domain Setup (Future)

When you get domains, update `.env.production`:
```bash
# Replace with your actual domains
FIRM1_DOMAIN_SSL=sadgurushakti.org
FIRM2_DOMAIN_SSL=automatepractice.com
# ... etc
```

## 🚨 Troubleshooting

### Services Not Starting
```bash
pm2 logs cms-backend          # Check backend logs
sudo systemctl status postgresql  # Check database
sudo systemctl status redis-server  # Check cache
```

### Can't Access from Outside
```bash
sudo ufw status               # Check firewall
sudo netstat -tulpn | grep 3000  # Check if port is open
```

### Database Connection Issues
```bash
sudo -u postgres psql -c "SELECT version();"  # Test DB connection
```

## ✅ Success Checklist

- [ ] SSH access to VPS working
- [ ] Node.js v18+ installed
- [ ] PostgreSQL running
- [ ] Redis running
- [ ] Project cloned and built
- [ ] PM2 services running
- [ ] Can access Admin Dashboard at http://72.62.243.99:3000
- [ ] Can access API at http://72.62.243.99:5000/api/health
- [ ] All 6 firm websites accessible
- [ ] Nginx configured (optional)

## 📞 Support

If you face any issues:

1. Check logs: `pm2 logs`
2. Check services: `pm2 status`
3. Check system: `htop` and `df -h`
4. Restart if needed: `pm2 restart all`

## 🎉 Next Steps

1. **Test all websites** - Make sure each firm's website loads
2. **Login to admin** - Use the admin dashboard to manage content
3. **Setup domains** - Point your actual domains to this IP
4. **SSL certificates** - Add HTTPS when domains are ready
5. **Backups** - Set up automated database backups

---

**Your CMS is now live at http://72.62.243.99!** 🚀