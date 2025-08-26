// js/layout.js
class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('partials/header.html'); // usa ruta relativa, no con "/"
    this.innerHTML = await res.text();
    // Después de insertar el header, relanza el traductor
    if (typeof initTranslations === 'function') {
      initTranslations();
    }
  }
}

class SiteFooter extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('partials/footer.html');
    this.innerHTML = await res.text();
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
