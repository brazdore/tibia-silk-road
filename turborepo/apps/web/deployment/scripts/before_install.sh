#!/usr/bin/env bash
set -euo pipefail

mkdir -p /srv/tsr-web
mkdir -p /srv/tsr-web-release
chown -R ec2-user:ec2-user /srv/tsr-web /srv/tsr-web-release
pm2 delete tsr-web || true