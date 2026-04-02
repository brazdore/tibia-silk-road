#!/usr/bin/env bash
set -euo pipefail

mkdir -p /srv/tsr-api
mkdir -p /srv/tsr-api-release
chown -R ec2-user:ec2-user /srv/tsr-api /srv/tsr-api-release
pm2 delete tsr-api || true