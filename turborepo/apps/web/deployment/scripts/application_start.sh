#!/usr/bin/env bash
set -euo pipefail

cd /srv/tsr-web

sudo -u ec2-user pm2 delete tsr-web || true
sudo -u ec2-user pm2 start ecosystem.config.cjs --only tsr-web
sudo -u ec2-user pm2 save