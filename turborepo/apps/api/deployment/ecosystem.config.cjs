module.exports = {
  apps: [
    {
      name: 'tsr-api',
      script: 'dist/main.js',
      cwd: '/srv/tsr-api',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
