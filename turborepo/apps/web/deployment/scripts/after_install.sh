#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOYMENT_GROUP_ID:?DEPLOYMENT_GROUP_ID is required}"
: "${DEPLOYMENT_ID:?DEPLOYMENT_ID is required}"

CODEDEPLOY_ROOT_DIR="/opt/codedeploy-agent/deployment-root"
ARCHIVE_DIR="$CODEDEPLOY_ROOT_DIR/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive"
APP_DIR="/srv/tsr-web"

mkdir -p "$APP_DIR"

find "$APP_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

# Copy from the original deployment archive so pnpm symlinks stay intact.
cp -a "$ARCHIVE_DIR"/. "$APP_DIR"/

chown -R ec2-user:ec2-user "$APP_DIR"
