/* eslint-env node */

module.exports = {
  apps: [
    {
      name: "tsr-web",
      script: "apps/web/server.js",
      cwd: "/srv/tsr-web",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
