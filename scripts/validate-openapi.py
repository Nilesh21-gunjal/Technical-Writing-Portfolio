from pathlib import Path

import yaml
from openapi_spec_validator import validate


specification_path = Path("API-Documentation/openapi.yaml")
specification = yaml.safe_load(specification_path.read_text(encoding="utf-8"))
validate(specification)
print(f"OpenAPI specification is valid: {specification_path}")
