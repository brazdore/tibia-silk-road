#!/usr/bin/env bash
set -euo pipefail

cd /srv/tsr-api-release

cp -r dist /srv/tsr-api/
cp -r prisma /srv/tsr-api/
cp package.json /srv/tsr-api/
cp ecosystem.config.cjs /srv/tsr-api/
cp .env.production /srv/tsr-api/.env

cd /srv/tsr-api
npm install --omit=dev
chown -R ec2-user:ec2-user /srv/tsr-api