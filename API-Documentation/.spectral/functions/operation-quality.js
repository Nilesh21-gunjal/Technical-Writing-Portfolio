const operationMethods = new Set(["get", "post", "put", "patch", "delete", "options", "head", "trace"]);

function hasSuccessExample(operation) {
  return Object.entries(operation.responses || {}).some(([status, response]) => {
    if (!/^2\d\d$/.test(status)) return false;
    if (status === "204") return true;
    return Object.values(response.content || {}).some((mediaType) => mediaType.example || (mediaType.examples && Object.keys(mediaType.examples).length));
  });
}

module.exports = (document) => {
  const findings = [];
  const globallySecured = Array.isArray(document.security) && document.security.length > 0;

  for (const [pathName, pathItem] of Object.entries(document.paths || {})) {
    for (const [method, operation] of Object.entries(pathItem || {})) {
      if (!operationMethods.has(method)) continue;
      const operationPath = ["paths", pathName, method];

      for (const field of ["summary", "description", "operationId", "tags"]) {
        if (!operation[field] || (Array.isArray(operation[field]) && operation[field].length === 0)) {
          findings.push({ message: `Operation is missing ${field}.`, path: [...operationPath, field] });
        }
      }

      if (!hasSuccessExample(operation)) {
        findings.push({ message: "Operation is missing a successful response example.", path: [...operationPath, "responses"] });
      }

      const authenticated = Object.prototype.hasOwnProperty.call(operation, "security")
        ? Array.isArray(operation.security) && operation.security.length > 0
        : globallySecured;
      if (authenticated && !Object.prototype.hasOwnProperty.call(operation.responses || {}, "401")) {
        findings.push({ message: "Authenticated operation must document a 401 response.", path: [...operationPath, "responses"] });
      }
    }
  }

  return findings;
};
