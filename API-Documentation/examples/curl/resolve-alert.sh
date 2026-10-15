#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:4010}"
ACCESS_TOKEN="${ACCESS_TOKEN:-portfolio-demo-token}"
DEVICE_ID="${DEVICE_ID:-DEV-2024-001842}"
ALERT_ID="${ALERT_ID:-ALT-2026-000041}"

curl --fail --silent --show-error \
  --request POST "${BASE_URL}/devices/${DEVICE_ID}/alerts/${ALERT_ID}/resolve" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{"resolution_note":"Reviewed by the operations team."}'
