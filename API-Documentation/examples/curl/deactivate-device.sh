#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:4010}"
ACCESS_TOKEN="${ACCESS_TOKEN:-portfolio-demo-token}"
DEVICE_ID="${DEVICE_ID:-DEV-2024-001842}"

curl --fail --silent --show-error \
  --request DELETE "${BASE_URL}/devices/${DEVICE_ID}" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --output /dev/null \
  --write-out "Device deactivated: HTTP %{http_code}\n"
