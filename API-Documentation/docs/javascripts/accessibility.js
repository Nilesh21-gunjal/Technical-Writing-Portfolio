(() => {
  const labelSearchDialog = () => {
    const searchDialog = document.querySelector('[data-md-component="search"][role="dialog"]');
    if (searchDialog && !searchDialog.hasAttribute('aria-label')) {
      searchDialog.setAttribute('aria-label', 'Search documentation');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', labelSearchDialog, { once: true });
  } else {
    labelSearchDialog();
  }
})();
