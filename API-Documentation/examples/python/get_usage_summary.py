import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
device_id = os.getenv("DEVICE_ID", "DEV-2024-001842")
headers = {"Authorization": f"Bearer {os.getenv('ACCESS_TOKEN', 'portfolio-demo-token')}"}
params = {
    "metric": "energy",
    "from": os.getenv("FROM_TIMESTAMP", "2026-10-01T00:00:00Z"),
    "to": os.getenv("TO_TIMESTAMP", "2026-10-08T00:00:00Z"),
}
response = requests.get(f"{base_url}/devices/{device_id}/usage-summary", headers=headers, params=params, timeout=30)
response.raise_for_status()
print(response.json())
