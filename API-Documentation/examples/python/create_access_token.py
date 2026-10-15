import os

import requests

base_url = os.getenv("BASE_URL", "http://127.0.0.1:4010")
response = requests.post(
    f"{base_url}/auth/token",
    json={
        "client_id": os.getenv("CLIENT_ID", "demo-client"),
        "client_secret": os.getenv("CLIENT_SECRET", "demo-secret"),
    },
    timeout=30,
)
response.raise_for_status()
print(response.json())
