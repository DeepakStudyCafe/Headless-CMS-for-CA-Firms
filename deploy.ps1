# PowerShell Production Deployment Script for Headless CMS
# Run this script on Windows to deploy the application

param(
    [switch]$NoBuild,
    [switch]$Clean
)

Write-Host "🚀 Starting production deployment..." -ForegroundColor Green

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

# Check if Docker is installed
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Error "Docker is not installed. Please install Docker Desktop first."
    exit 1
}

# Check if Docker Compose is available
$dockerComposeCmd = $null
if (Get-Command docker-compose -ErrorAction SilentlyContinue) {
    $dockerComposeCmd = "docker-compose"
} elseif (docker compose version 2>$null) {
    $dockerComposeCmd = "docker compose"
} else {
    Write-Error "Docker Compose is not available. Please install Docker Compose."
    exit 1
}

Write-Info "Using Docker Compose command: $dockerComposeCmd"

# Check if .env.production file exists
if (-not (Test-Path ".env.production")) {
    Write-Error ".env.production file not found!"
    Write-Warning "Please copy .env.production.example to .env.production and update the values."
    exit 1
}

Write-Info "Environment file found: .env.production"

# Create necessary directories
Write-Info "Creating necessary directories..."
if (-not (Test-Path "nginx\ssl")) { New-Item -Path "nginx\ssl" -ItemType Directory -Force | Out-Null }
if (-not (Test-Path "init-scripts")) { New-Item -Path "init-scripts" -ItemType Directory -Force | Out-Null }

# Stop existing containers
Write-Info "Stopping existing containers..."
& $dockerComposeCmd.Split() down --remove-orphans

if ($Clean) {
    Write-Info "Cleaning up old images and volumes..."
    & $dockerComposeCmd.Split() down --rmi all --volumes --remove-orphans
}

# Build images
if (-not $NoBuild) {
    Write-Info "Building Docker images..."
    & $dockerComposeCmd.Split() build --no-cache
}

# Start database services
Write-Info "Starting database services..."
& $dockerComposeCmd.Split() up -d postgres redis

# Wait for database
Write-Info "Waiting for database to be ready..."
Start-Sleep -Seconds 30

# Test database connection
Write-Info "Testing database connection..."
$dbTest = & $dockerComposeCmd.Split() exec -T postgres pg_isready -U postgres 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Info "✅ Database is ready"
} else {
    Write-Warning "⚠️ Database connection test failed, proceeding anyway..."
}

# Start backend
Write-Info "Starting backend service..."
& $dockerComposeCmd.Split() up -d backend

# Wait for backend
Write-Info "Waiting for backend to be ready..."
Start-Sleep -Seconds 20

# Start frontend services
Write-Info "Starting frontend services..."
& $dockerComposeCmd.Split() up -d admin-dashboard firm1-sharma firm2-verma firm3-gupta firm4-kapoor firm5-singh firm6-patel

# Start Nginx
Write-Info "Starting Nginx reverse proxy..."
& $dockerComposeCmd.Split() up -d nginx

# Show status
Write-Info "Checking service status..."
& $dockerComposeCmd.Split() ps

# Test services
Write-Info "Testing service endpoints..."

# Test backend health
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/health" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Info "✅ Backend is healthy"
    }
} catch {
    Write-Warning "⚠️ Backend health check failed"
}

# Test admin dashboard
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Info "✅ Admin dashboard is running"
    }
} catch {
    Write-Warning "⚠️ Admin dashboard is not responding"
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
        Write-Warning "⚠️ Website on port $port is not responding"
    }
}

Write-Host ""
Write-Info "🎉 Deployment completed!"
Write-Host ""
Write-Info "Services are running on the following ports:"
Write-Host "  - Admin Dashboard: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  - API Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "  - Firm 1 (Sharma): http://localhost:3001" -ForegroundColor Cyan
Write-Host "  - Firm 2 (Verma): http://localhost:3002" -ForegroundColor Cyan
Write-Host "  - Firm 3 (Gupta): http://localhost:3003" -ForegroundColor Cyan
Write-Host "  - Firm 4 (Kapoor): http://localhost:3004" -ForegroundColor Cyan
Write-Host "  - Firm 5 (Singh): http://localhost:3005" -ForegroundColor Cyan
Write-Host "  - Firm 6 (Patel): http://localhost:3006" -ForegroundColor Cyan
Write-Host ""
Write-Info "Useful commands:"
Write-Host "  - View logs: $dockerComposeCmd logs -f [service_name]" -ForegroundColor Yellow
Write-Host "  - Stop all: $dockerComposeCmd down" -ForegroundColor Yellow
Write-Host "  - Restart service: $dockerComposeCmd restart [service_name]" -ForegroundColor Yellow
Write-Host "  - Rebuild and deploy: .\deploy.ps1 -Clean" -ForegroundColor Yellow

Write-Host ""
Write-Warning "Next steps for production:"
Write-Host "1. Update nginx/conf.d/default.conf with your actual domain names"
Write-Host "2. Set up SSL certificates (Let's Encrypt recommended)"
Write-Host "3. Update DNS records to point to this server"
Write-Host "4. Configure firewall to allow HTTP (80) and HTTPS (443) traffic"
Write-Host "5. Set up automated backups for PostgreSQL data"
Write-Host "6. Configure monitoring and logging"