#!/usr/bin/env bash
set -euo pipefail

cd /srv/tsr-web-release

rm -rf /srv/tsr-web/*
mkdir -p /srv/tsr-web

# Preserve symlinks and full standalone layout exactly
cp -a .next/standalone/. /srv/tsr-web/

mkdir -p /srv/tsr-web/.next
cp -a .next/static /srv/tsr-web/.next/
cp -a public /srv/tsr-web/ || true
cp -a ecosystem.config.cjs /srv/tsr-web/
cp -a .env.production /srv/tsr-web/.env

chown -R ec2-user:ec2-user /srv/tsr-web