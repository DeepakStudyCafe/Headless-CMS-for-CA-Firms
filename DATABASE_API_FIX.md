# 🔧 Production Database & API Fix Guide

## समस्या का विश्लेषण

आपके error logs से पता चल रहा है:
- ✅ **Login successful** - Auth token properly generated
- ❌ **API calls failing** - 500 Internal Server Error  
- ❌ **Database connection issues** - `/api/websites` और `/api/auth/verify` fail

## 🚀 Immediate Fix Steps

### Step 1: Database Connection Check
```bash
# SSH into your VPS
ssh your_vps_user@your_vps_ip

# Check PostgreSQL status
sudo systemctl status postgresql
sudo -u postgres psql -c "SELECT version();"

# Check database exists
sudo -u postgres psql -l | grep enterprise_cms
```

### Step 2: Environment Variables Verification  
```bash
cd ~/headless-cms/backend
cat .env.production | grep -E "(DATABASE_URL|JWT_SECRET|NODE_ENV)"

# Should show:
# DATABASE_URL=postgresql://postgres:password@localhost:5432/enterprise_cms
# JWT_SECRET=your_secret_here
# NODE_ENV=production
```

### Step 3: Database Migration & Setup
```bash
cd ~/headless-cms/backend

# Install dependencies if not done
npm install

# Generate Prisma client
npx prisma generate

# Apply migrations
npx prisma migrate deploy

# Check database tables
npx prisma studio --port 5001
# Or direct SQL check:
sudo -u postgres psql enterprise_cms -c "\dt"
```

### Step 4: Test Backend Separately
```bash
# Stop PM2 first
pm2 stop all

# Test backend directly
cd ~/headless-cms/backend
npm run dev

# In another terminal, test endpoints:
curl http://localhost:5000/health
curl http://localhost:5000/health/db
```

### Step 5: Fix Database Connection Issues

#### Create Admin User (if needed)
```bash
cd ~/headless-cms/backend
npx prisma db seed
# OR create manually:
sudo -u postgres psql enterprise_cms
```

```sql
-- Create admin user if doesn't exist
INSERT INTO users (id, name, email, password_hash, role) 
VALUES (
  'admin-uuid-here', 
  'Admin User', 
  'admin@cafirm.com', 
  '$2a$10$encrypted_password_here', 
  'SUPER_ADMIN'
) ON CONFLICT (email) DO NOTHING;

-- Create default websites
INSERT INTO websites (id, name, slug) VALUES 
('web1', 'Sharma Associates', 'sharma'),
('web2', 'Verma & Co', 'verma'),
('web3', 'Gupta Partners', 'gupta'),
('web4', 'Kapoor Associates', 'kapoor'),
('web5', 'Singh & Partners', 'singh'),
('web6', 'Patel Group', 'patel')
ON CONFLICT (slug) DO NOTHING;
```

### Step 6: Enhanced Deployment Script 

```bash
# Use the enhanced deployment script
cd ~/headless-cms
chmod +x deploy-pm2.sh
./deploy-pm2.sh

# OR step by step:
pm2 delete all
npm run install:all
npm run build:all

# Start with proper environment
pm2 start ecosystem.config.js --env production
pm2 save
pm2 status
```

## 🔍 Debugging Commands

### Check Logs
```bash
# Backend logs
pm2 logs headless-cms-backend --lines 100

# Database logs  
sudo tail -f /var/log/postgresql/postgresql-*.log

# System logs
journalctl -u postgresql -f
```

### Test API Endpoints
```bash
# API health
curl -v https://api.digitechai.in/health
curl -v https://api.digitechai.in/health/db

# Test auth
curl -X POST https://api.digitechai.in/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@cafirm.com","password":"your_password"}' \
  -c cookies.txt -v

# Test websites
curl -X GET https://api.digitechai.in/api/websites \
  -b cookies.txt -v
```

### Database Direct Check
```bash
# Connect to database
sudo -u postgres psql enterprise_cms

-- Check tables
\dt

-- Check users
SELECT id, name, email, role FROM users;

-- Check websites  
SELECT id, name, slug FROM websites;

-- Check database stats
SELECT 
  schemaname,
  tablename,
  n_tup_ins as inserts,
  n_tup_upd as updates,
  n_tup_del as deletes
FROM pg_stat_user_tables;
```

## 🛠️ Common Issues & Solutions

### Issue 1: Database Connection Refused
```bash
# Fix PostgreSQL service
sudo systemctl restart postgresql
sudo systemctl enable postgresql

# Check port
sudo netstat -tlnp | grep :5432
```

### Issue 2: Tables Not Found
```bash
cd ~/headless-cms/backend
npx prisma migrate reset
npx prisma generate
npx prisma migrate deploy
```

### Issue 3: Permission Issues
```bash
# Fix database permissions
sudo -u postgres psql
ALTER USER postgres CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE enterprise_cms TO postgres;
```

### Issue 4: PM2 Environment Issues
```bash
# Check PM2 environment
pm2 env headless-cms-backend

# Restart with fresh environment
pm2 delete all
pm2 start ecosystem.config.js --env production
```

## 📊 Success Verification

### 1. Backend Health Checks
- ✅ `curl https://api.digitechai.in/health` returns `{"status":"ok"}`
- ✅ `curl https://api.digitechai.in/health/db` returns `{"status":"ok","database":"connected"}`

### 2. Database Verification
- ✅ Tables exist: `users`, `websites`, `pages`, `sections`
- ✅ Admin user exists with correct password
- ✅ Default websites data present

### 3. Authentication Flow
- ✅ Login returns token and user data
- ✅ Token verification works
- ✅ Protected routes accessible with valid token

### 4. PM2 Status
- ✅ All processes running without errors
- ✅ No restart loops or crashes in logs

## 🔄 Emergency Recovery

### If everything fails:
```bash
# Complete reset
pm2 delete all
sudo systemctl restart postgresql
cd ~/headless-cms/backend

# Fresh database setup
sudo -u postgres dropdb enterprise_cms
sudo -u postgres createdb enterprise_cms
npx prisma migrate deploy
npx prisma generate

# Restart services
./deploy-pm2.sh
```

### Create Emergency Admin User:
```bash
cd ~/headless-cms/backend
node -e "
const bcrypt = require('bcryptjs');
const password = bcrypt.hashSync('admin123', 10);
console.log('Hashed password:', password);
"

# Use the hashed password in SQL insert
```

## 📋 Production Checklist

Before declaring success, verify:
- [ ] Database connection working
- [ ] All tables created with data
- [ ] Admin user can login
- [ ] API endpoints responding correctly  
- [ ] PM2 processes stable
- [ ] Logs showing no errors
- [ ] Frontend can fetch data from backend
- [ ] Authentication flow complete

अब आपके API endpoints properly काम करने चाहिए! 🎉