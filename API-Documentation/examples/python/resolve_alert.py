import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
device_id = os.getenv("DEVICE_ID", "DEV-2024-001842")
alert_id = os.getenv("ALERT_ID", "ALT-2026-000041")
headers = {"Authorization": f"Bearer {os.getenv('ACCESS_TOKEN', 'portfolio-demo-token')}"}
response = requests.post(
    f"{base_url}/devices/{device_id}/alerts/{alert_id}/resolve",
    headers=headers,
    json={"resolution_note": "Reviewed by the operations team."},
    timeout=30,
)
response.raise_for_status()
print(response.json())
