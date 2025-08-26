// js/layout.js

import { initializeTranslator } from './translations.js';

class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('partials/header.html');
    this.innerHTML = await res.text();
    initializeTranslator();
  }
}

class CheckinModal extends HTMLElement {
  async connectedCallback() {
    // CORREGIDO: Usando el nombre de archivo que confirmaste.
    const res = await fetch('partials/checkin.html'); 
    this.innerHTML = await res.text();
  }
}
class GifModalGestor extends HTMLElement {
    async connectedCallback() {
        const res = await fetch('partials/gif.html');
        this.innerHTML = await res.text();
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
customElements.define('checkin-modal', CheckinModal);
customElements.define('gif-modal-gestor', GifModalGestor);