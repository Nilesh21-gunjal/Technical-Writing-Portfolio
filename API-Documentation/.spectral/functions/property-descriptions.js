function visitSchema(schema, path, findings) {
  if (!schema || typeof schema !== "object") return;

  for (const [propertyName, property] of Object.entries(schema.properties || {})) {
    const propertyPath = [...path, "properties", propertyName];
    if (!Object.prototype.hasOwnProperty.call(property, "$ref") && !property.description) {
      findings.push({ message: `Property ${propertyName} is missing a description.`, path: propertyPath });
    }
    visitSchema(property, propertyPath, findings);
  }

  if (schema.items) visitSchema(schema.items, [...path, "items"], findings);
  for (const keyword of ["allOf", "anyOf", "oneOf"]) {
    (schema[keyword] || []).forEach((entry, index) => visitSchema(entry, [...path, keyword, index], findings));
  }
}

module.exports = (document) => {
  const findings = [];
  for (const [name, schema] of Object.entries((document.components || {}).schemas || {})) {
    visitSchema(schema, ["components", "schemas", name], findings);
  }
  return findings;
};
