// js/modals.js
document.addEventListener('DOMContentLoaded', () => {
    const gifModal = document.getElementById('gifModal');
    if (gifModal) {
        gifModal.addEventListener('show.bs.modal', function (event) {
            // Botón que activó el modal
            const button = event.relatedTarget;

            // Extraer información de los atributos data-*
            const title = button.getAttribute('data-gif-title');
            const gifSrc = button.getAttribute('data-gif-src');

            // Actualizar el contenido del modal
            const modalTitle = gifModal.querySelector('#gifModalTitle');
            const modalImage = gifModal.querySelector('#gifModalImage');

            modalTitle.textContent = title;
            modalImage.src = gifSrc;
        });
    }
});