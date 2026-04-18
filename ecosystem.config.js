
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
    
    // Website - A. Arun Ganjewar and Co (clone of firm5-singh)
    {
      name: 'a-arun-ganjewar-and-co',
      cwd: './websites/A-Arun-Ganjewar',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3012
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3012
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
    },

    // Showcase Website - automationcafe.in
    {
      name: 'showcase-website',
      cwd: './showcase-website',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3007
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3007
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Template-1 (temp7.automationcafe.in)
    {
      name: 'template-1',
      cwd: './websites/Template-1',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8080
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      restart_delay: 5000
    },

    // Abhishekrajaram
    {
      name: 'abhishekrajaram',
      cwd: './websites/Abhishekrajaram',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8088
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8088
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Monika S
    {
      name: 'monikas',
      cwd: './websites/MonikaS',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        PORT: 8090
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8090
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Template-2 (temp8.automationcafe.in)
    {
      name: 'template-2',
      cwd: './websites/Template-2',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8081
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8081
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Template-3 (temp9.automationcafe.in)
    {
      name: 'template-3',
      cwd: './websites/Template-3',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8082
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8082
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Template-4 (temp10.automationcafe.in)
    {
      name: 'template-4',
      cwd: './websites/Template-4',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8083
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8083
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    },

    // Vineet Taral & Associates
    {
      name: 'vineet-taral',
      cwd: './websites/Vineet-Taral',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8091
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8091
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      autorestart: true,
      restart_delay: 5000
    }
    ,{
      name: 'agarwal-financial-consultancy',
      cwd: './websites/Agarwal-Financial-Consultancy',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'development',
        PORT: 8094
      }
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
