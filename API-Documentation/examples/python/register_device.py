import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
headers = {"Authorization": f"Bearer {os.getenv('ACCESS_TOKEN', 'portfolio-demo-token')}"}
payload = {
    "external_id": "LD-SENSOR-042",
    "name": "Loading dock sensor",
    "device_type": "sensor",
    "site": {"site_code": "SITE-001", "timezone": "UTC"},
    "manufacturer": "Example Devices",
    "model": "Edge-100",
    "communication_protocol": "MQTT",
}
response = requests.post(f"{base_url}/devices", headers=headers, json=payload, timeout=30)
response.raise_for_status()
print(response.json())
