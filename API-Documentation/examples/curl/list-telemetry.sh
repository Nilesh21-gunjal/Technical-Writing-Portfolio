#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:4010}"
ACCESS_TOKEN="${ACCESS_TOKEN:-portfolio-demo-token}"
DEVICE_ID="${DEVICE_ID:-DEV-2024-001842}"
FROM_TIMESTAMP="${FROM_TIMESTAMP:-2026-10-01T00:00:00Z}"
TO_TIMESTAMP="${TO_TIMESTAMP:-2026-10-02T00:00:00Z}"

curl --fail --silent --show-error \
  "${BASE_URL}/devices/${DEVICE_ID}/telemetry?from=${FROM_TIMESTAMP}&to=${TO_TIMESTAMP}&metric=temperature&page=1&per_page=20" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Accept: application/json"
