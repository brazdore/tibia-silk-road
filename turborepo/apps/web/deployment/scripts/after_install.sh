#!/usr/bin/env bash
set -euo pipefail

RELEASE_DIR="/srv/tsr-web-release"
APP_DIR="/srv/tsr-web"

mkdir -p "$APP_DIR"

find "$APP_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

cp -a "$RELEASE_DIR"/. "$APP_DIR"/

chown -R ec2-user:ec2-user "$APP_DIR"
