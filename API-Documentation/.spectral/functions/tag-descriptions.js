module.exports = (document) => {
  const findings = [];
  (document.tags || []).forEach((tag, index) => {
    if (!tag.description || !tag.description.trim()) {
      findings.push({ message: `Tag ${tag.name || index} is missing a description.`, path: ["tags", index, "description"] });
    }
  });
  return findings;
};
