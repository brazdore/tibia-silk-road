#!/usr/bin/env bash
set -euo pipefail

for i in {1..15}; do
  if curl -fsS http://127.0.0.1:3001/health > /dev/null; then
    exit 0
  fi
  sleep 2
done

echo "API health check failed after retries"
exit 1