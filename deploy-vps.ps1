# PowerShell VPS Deployment Script for Headless CMS (Without Docker)
# Run this script on Windows VPS to deploy the application

param(
    [switch]$NoBuild,
    [switch]$Clean
)

Write-Host "🚀 Starting VPS deployment..." -ForegroundColor Green

function Write-Info {
    param($Message)
    Write-Host "[INFO] $Message" -ForegroundColor Green
}

function Write-Warning {
    param($Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param($Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed. Please install Node.js (v18 or later) first."
    exit 1
}

# Check if npm is installed
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm is not installed. Please install npm first."
    exit 1
}

# Check if PostgreSQL is installed
if (-not (Get-Command psql -ErrorAction SilentlyContinue)) {
    Write-Error "PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
}

# Check if PM2 is installed
if (-not (Get-Command pm2 -ErrorAction SilentlyContinue)) {
    Write-Warning "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
}

# Check if .env.production file exists
if (-not (Test-Path ".env.production")) {
    Write-Error ".env.production file not found!"
    Write-Warning "Please copy .env.production.example to .env.production and update the values."
    exit 1
}

Write-Info "Environment file found"

# Create necessary directories
Write-Info "Creating necessary directories..."
if (-not (Test-Path "uploads/resumes")) {
    New-Item -ItemType Directory -Path "uploads/resumes" -Force
}
if (-not (Test-Path "logs")) {
    New-Item -ItemType Directory -Path "logs" -Force
}

# Install all dependencies
Write-Info "Installing dependencies for all projects..."
npm run install:all

if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to install dependencies"
    exit 1
}

# Build all projects (unless -NoBuild is specified)
if (-not $NoBuild) {
    Write-Info "Building all projects..."
    npm run build:all
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to build projects"
        exit 1
    }
}

# Load environment variables
Write-Info "Loading environment variables..."
Get-Content ".env.production" | ForEach-Object {
    if ($_ -match '^([^#=]+)=(.*)$') {
        [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2], "Process")
    }
}

# Setup PostgreSQL database (assuming PostgreSQL service is running)
Write-Info "Setting up PostgreSQL database..."
$dbName = $env:POSTGRES_DB
$dbUser = $env:POSTGRES_USER
$dbPassword = $env:POSTGRES_PASSWORD

if (-not $dbName) { $dbName = "enterprise_cms" }
if (-not $dbUser) { $dbUser = "postgres" }

try {
    # Create database if it doesn't exist
    $env:PGPASSWORD = $dbPassword
    psql -U $dbUser -h localhost -c "CREATE DATABASE $dbName;" 2>$null
    Write-Info "Database created or already exists"
} catch {
    Write-Warning "Database might already exist or there was an issue creating it"
}

# Run database migrations
Write-Info "Running database migrations..."
Set-Location backend
npx prisma migrate deploy
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to run database migrations"
    Set-Location ..
    exit 1
}

npx prisma generate
Set-Location ..

# Stop existing PM2 processes
Write-Info "Stopping existing PM2 processes..."
pm2 stop all 2>$null
pm2 delete all 2>$null

# Start services with PM2
try {
    # Start backend
    Write-Info "Starting backend service with PM2..."
    Set-Location backend
    pm2 start src/server.js --name "cms-backend"
    Set-Location ..

    # Start admin dashboard
    Write-Info "Starting admin dashboard with PM2..."
    Set-Location admin-dashboard
    pm2 start npm --name "cms-admin" -- start
    Set-Location ..

    # Start all firm websites
    Write-Info "Starting firm websites with PM2..."
    
    Set-Location "websites/firm1-sharma"
    pm2 start npm --name "cms-firm1" -- start
    Set-Location "../.."
    
    Set-Location "websites/firm2-verma"
    pm2 start npm --name "cms-firm2" -- start
    Set-Location "../.."
    
    Set-Location "websites/firm3-gupta"
    pm2 start npm --name "cms-firm3" -- start
    Set-Location "../.."
    
    Set-Location "websites/firm4-kapoor"
    pm2 start npm --name "cms-firm4" -- start
    Set-Location "../.."
    
    Set-Location "websites/firm5-singh"
    pm2 start npm --name "cms-firm5" -- start
    Set-Location "../.."
    
    Set-Location "websites/firm6-patel"
    pm2 start npm --name "cms-firm6" -- start
    Set-Location "../.."

} catch {
    Write-Error "Failed to start one or more services: $_"
    exit 1
}

# Save PM2 configuration
Write-Info "Saving PM2 configuration..."
pm2 save

# Show status
Write-Info "Checking service health..."
pm2 status

# Wait for services to start
Write-Info "Waiting for services to start..."
Start-Sleep -Seconds 10

# Test services
Write-Info "Testing service endpoints..."

# Test backend health
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/health" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Info "✅ Backend is healthy"
    }
} catch {
    Write-Warning "⚠️  Backend health check failed"
}

# Test admin dashboard
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Info "✅ Admin dashboard is running"
    }
} catch {
    Write-Warning "⚠️  Admin dashboard is not responding"
}

# Test websites
for ($i = 1; $i -le 6; $i++) {
    $port = 3000 + $i
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$port" -UseBasicParsing -TimeoutSec 5
        if ($response.StatusCode -eq 200) {
            Write-Info "✅ Website on port $port is running"
        }
    } catch {
        Write-Warning "⚠️  Website on port $port is not responding"
    }
}

Write-Info "🎉 VPS Deployment completed!"
Write-Host ""
Write-Info "Services are running on the following ports:"
Write-Host "  - Admin Dashboard: http://localhost:3000"
Write-Host "  - API Backend: http://localhost:5000"
Write-Host "  - Firm 1 (Sharma): http://localhost:3001"
Write-Host "  - Firm 2 (Verma): http://localhost:3002"
Write-Host "  - Firm 3 (Gupta): http://localhost:3003"
Write-Host "  - Firm 4 (Kapoor): http://localhost:3004"
Write-Host "  - Firm 5 (Singh): http://localhost:3005"  
Write-Host "  - Firm 6 (Patel): http://localhost:3006"
Write-Host ""
Write-Info "To view logs: pm2 logs [service_name]"
Write-Info "To stop all services: pm2 stop all"
Write-Info "To restart a service: pm2 restart [service_name]"
Write-Info "To monitor services: pm2 monit"

Write-Host ""
Write-Warning "Next steps for production:"
Write-Host "1. Set up IIS or Nginx as reverse proxy for your domains"
Write-Host "2. Set up SSL certificates"
Write-Host "3. Update DNS records to point to this server"
Write-Host "4. Configure automated backups for PostgreSQL data"
Write-Host "5. Set up monitoring and logging"
Write-Host "6. Update .env.production with your actual domain names"

# Configure Windows Firewall (optional)
Write-Info "Configuring Windows Firewall..."
try {
    netsh advfirewall firewall add rule name="CMS Admin" dir=in action=allow protocol=TCP localport=3000
    netsh advfirewall firewall add rule name="CMS API" dir=in action=allow protocol=TCP localport=5000
    netsh advfirewall firewall add rule name="CMS Websites" dir=in action=allow protocol=TCP localport=3001-3006
    Write-Info "Firewall rules added successfully"
} catch {
    Write-Warning "Could not configure firewall rules. Please configure manually."
}