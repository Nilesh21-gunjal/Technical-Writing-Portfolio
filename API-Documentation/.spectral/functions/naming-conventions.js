const operationMethods = new Set(["get", "post", "put", "patch", "delete", "options", "head", "trace"]);
const lowerCamelCase = /^[a-z]+(?:[A-Z][A-Za-z0-9]*)*$/;
const snakeCase = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;

function inspectProperties(schema, path, findings) {
  if (!schema || typeof schema !== "object") return;
  for (const [propertyName, property] of Object.entries(schema.properties || {})) {
    if (!snakeCase.test(propertyName)) {
      findings.push({ message: `Property ${propertyName} must use snake case.`, path: [...path, "properties", propertyName] });
    }
    inspectProperties(property, [...path, "properties", propertyName], findings);
  }
  if (schema.items) inspectProperties(schema.items, [...path, "items"], findings);
}

module.exports = (document) => {
  const findings = [];

  for (const [pathName, pathItem] of Object.entries(document.paths || {})) {
    for (const [method, operation] of Object.entries(pathItem || {})) {
      if (!operationMethods.has(method)) continue;
      if (operation.operationId && !lowerCamelCase.test(operation.operationId)) {
        findings.push({ message: `operationId ${operation.operationId} must use lower camel case.`, path: ["paths", pathName, method, "operationId"] });
      }
      for (const parameter of operation.parameters || []) {
        if (parameter.name && !snakeCase.test(parameter.name)) {
          findings.push({ message: `Parameter ${parameter.name} must use snake case.`, path: ["paths", pathName, method, "parameters"] });
        }
      }
    }
  }

  for (const [name, schema] of Object.entries((document.components || {}).schemas || {})) {
    inspectProperties(schema, ["components", "schemas", name], findings);
  }
  return findings;
};
