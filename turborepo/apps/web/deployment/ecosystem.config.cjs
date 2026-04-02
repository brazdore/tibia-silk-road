/* eslint-env node */

module.exports = {
  apps: [
    {
      name: "tsr-web",
      cwd: "/srv/tsr-web/apps/web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
