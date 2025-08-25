// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los botones de filtro y todas las tarjetas de proyecto
    const filterButtons = document.querySelectorAll('#filter-buttons .btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Añade un evento de clic a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene la categoría del botón en el que se hizo clic (ej. 'react', 'css', 'all')
            const filter = button.getAttribute('data-filter');

            // --- Estilo de los botones ---
            // Quita la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' solo al botón seleccionado
            button.classList.add('active');

            // --- Lógica de filtrado ---
            // Recorre cada tarjeta de proyecto para decidir si mostrarla u ocultarla
            projectCards.forEach(card => {
                // Obtiene las categorías de la tarjeta (ej. 'laravel php')
                const categories = card.getAttribute('data-category');

                // Comprueba si la tarjeta debe ser visible
                // La tarjeta se muestra si:
                // 1. El filtro es 'all' (mostrar todas)
                // 2. Las categorías de la tarjeta incluyen la categoría del filtro
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block'; // Muestra la tarjeta
                } else {
                    card.style.display = 'none'; // Oculta la tarjeta
                }
            });
        });
    });
});
