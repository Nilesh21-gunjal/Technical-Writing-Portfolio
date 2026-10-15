(() => {
  const renderReference = () => {
    const target = document.querySelector('#swagger-ui');

    if (!target || typeof window.SwaggerUIBundle !== 'function') {
      return;
    }

    window.SwaggerUIBundle({
      url: '../openapi.yaml',
      dom_id: '#swagger-ui',
      deepLinking: true,
      displayRequestDuration: true,
      defaultModelsExpandDepth: 1,
      defaultModelExpandDepth: 1,
      docExpansion: 'list',
      filter: true,
      tryItOutEnabled: false,
      supportedSubmitMethods: [],
      syntaxHighlight: { activate: true, theme: 'agate' },
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderReference, { once: true });
  } else {
    renderReference();
  }
})();
