#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:4010}"
ACCESS_TOKEN="${ACCESS_TOKEN:-portfolio-demo-token}"

curl --fail --silent --show-error \
  --request POST "${BASE_URL}/devices" \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "external_id": "LD-SENSOR-042",
    "name": "Loading dock sensor",
    "device_type": "sensor",
    "site": {"site_code": "SITE-001", "timezone": "UTC"},
    "manufacturer": "Example Devices",
    "model": "Edge-100",
    "communication_protocol": "MQTT"
  }'
