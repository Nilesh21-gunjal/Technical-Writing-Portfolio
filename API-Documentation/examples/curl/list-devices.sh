#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:4010}"
ACCESS_TOKEN="${ACCESS_TOKEN:-portfolio-demo-token}"

curl --fail --silent --show-error \
  "${BASE_URL}/devices?page=1&per_page=20&status=active&site_code=SITE-001" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json"
