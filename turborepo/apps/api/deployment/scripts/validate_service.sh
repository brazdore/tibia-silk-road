#!/usr/bin/env bash
set -euo pipefail

check() {
  local path="$1"

  for i in {1..15}; do
    if curl -fsS "http://127.0.0.1:3001${path}" > /dev/null; then
      return 0
    fi
    sleep 2
  done

  echo "API check failed for ${path}"
  exit 1
}

check /health
check /items