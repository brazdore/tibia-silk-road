#!/usr/bin/env bash
set -euo pipefail

cd /srv/tsr-api
sudo -u ec2-user pm2 start ecosystem.config.cjs --only tsr-api
sudo -u ec2-user pm2 save