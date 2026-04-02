#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/srv/tsr-api
RELEASE_DIR=/srv/tsr-api-release

mkdir -p "$APP_DIR"

cp -a "$RELEASE_DIR"/. "$APP_DIR"/

cd "$APP_DIR"
npm install --omit=dev
chown -R ec2-user:ec2-user "$APP_DIR"