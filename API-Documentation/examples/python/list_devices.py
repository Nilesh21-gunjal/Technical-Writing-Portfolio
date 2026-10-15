import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
headers = {"Authorization": f"Bearer {os.getenv('ACCESS_TOKEN', 'portfolio-demo-token')}"}
response = requests.get(
    f"{base_url}/devices",
    headers=headers,
    params={"page": 1, "per_page": 20, "status": "active", "site_code": "SITE-001"},
    timeout=30,
)
response.raise_for_status()
print(response.json())
