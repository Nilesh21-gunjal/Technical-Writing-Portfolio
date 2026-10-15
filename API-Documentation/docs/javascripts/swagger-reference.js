(() => {
  const loadStylesheet = (href) => new Promise((resolve, reject) => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    stylesheet.addEventListener('load', resolve, { once: true });
    stylesheet.addEventListener('error', () => reject(new Error('Swagger UI stylesheet could not be loaded.')), { once: true });
    document.head.append(stylesheet);
  });

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', resolve, { once: true });
    script.addEventListener('error', () => reject(new Error('Swagger UI could not be loaded.')), { once: true });
    document.body.append(script);
  });

  const setupReference = () => {
    const target = document.querySelector('#swagger-ui');
    const button = document.querySelector('#load-api-reference');
    const loader = document.querySelector('#reference-loader');

    if (!target || !button || !loader) {
      return;
    }

    button.addEventListener('click', async () => {
      button.disabled = true;
      button.textContent = 'Loading interactive reference…';

      try {
        await Promise.all([
          loadStylesheet('../../assets/swagger-ui/swagger-ui.css'),
          loadScript('../../assets/swagger-ui/swagger-ui-bundle.js'),
        ]);

        target.hidden = false;
        window.SwaggerUIBundle({
          url: '../../openapi.yaml',
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
        loader.remove();
      } catch (error) {
        button.disabled = false;
        button.textContent = 'Load interactive reference';
        const message = document.createElement('p');
        message.setAttribute('role', 'alert');
        message.textContent = `${error.message} Open the OpenAPI YAML link instead.`;
        loader.append(message);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReference, { once: true });
  } else {
    setupReference();
  }
})();
