import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
device_id = os.getenv("DEVICE_ID", "DEV-2024-001842")
headers = {"Authorization": f"Bearer {os.getenv('ACCESS_TOKEN', 'portfolio-demo-token')}"}
response = requests.get(f"{base_url}/devices/{device_id}", headers=headers, timeout=30)
response.raise_for_status()
print(response.json())
