// PM2 ecosystem configuration for production deployment

module.exports = {
  apps: [
    // Backend API Server
    {
      name: 'headless-cms-backend',
      cwd: './backend',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_file: './logs/backend-combined.log',
      time: true,
      autorestart: true,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Admin Dashboard
    {
      name: 'headless-cms-admin',
      cwd: './admin-dashboard',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/admin-error.log',
      out_file: './logs/admin-out.log',
      log_file: './logs/admin-combined.log',
      time: true,
      autorestart: true,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Website 1 - Sharma Associates
    {
      name: 'firm1-sharma',
      cwd: './websites/firm1-sharma',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },
    
    // Website 2 - Verma & Co
    {
      name: 'firm2-verma',
      cwd: './websites/firm2-verma',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3002
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },
    
    // Website 3 - Gupta Partners
    {
      name: 'firm3-gupta',
      cwd: './websites/firm3-gupta',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3003
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },
    
    // Website 4 - Kapoor Associates
    {
      name: 'firm4-kapoor',
      cwd: './websites/firm4-kapoor',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3004
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3004
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },
    
    // Website 5 - Singh & Partners  
    {
      name: 'firm5-singh',
      cwd: './websites/firm5-singh',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3005
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },
    
    // Website 6 - Patel Group
    {
      name: 'firm6-patel',
      cwd: './websites/firm6-patel',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3006
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3006
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'your_vps_ip',
      ref: 'origin/main',
      repo: 'your_git_repo_url',
      path: '/root/headless-cms',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};