// js/translations.js

const translations = {
    es: {
        // --- TEXTO PÁGINA PRINCIPAL (index.html) ---
        pageTitle: "María López Luengo - Desarrolladora Web",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navContact: "Contacto",
        heroTitle: "Hola, soy María López Luengo.",
        heroSubtitle: "Desarrolladora Web apasionada por crear soluciones limpias, funcionales y enfocadas en el usuario.",
        heroButton: "Ver mis proyectos",
        aboutTitle: "Sobre mí",
        aboutText: "Con experiencia previa en entornos de alta presión, he desarrollado una gran resiliencia y pensamiento analítico, habilidades que ahora aplico para construir software robusto. Me especializo en el ecosistema de PHP con Laravel y disfruto creando experiencias interactivas con JavaScript y React.",
        projectsTitle: "Proyectos Destacados",
        p1Title: "Check-In Garage",
        p1Description: "Aplicación SaaS completa para la gestión integral de talleres mecánicos, con roles para administradores y clientes.",
        p2Title: "CV Interactivo",
        p2Description: "Este mismo portafolio. Un proyecto dinámico construido con HTML, CSS y JavaScript para cargar datos y ofrecer multi-idioma.",
        repoButton: "Ver Repositorio",
        contactTitle: "Ponte en contacto",
        contactText: "Puedes encontrarme en LinkedIn, ver más de mi código en GitHub o enviarme un correo.",
        
        // --- NUEVO TEXTO PÁGINA DE PROYECTOS (proyecto.html) ---
        projectsPageTitle: "Proyectos - María López Luengo",
        galleryTitle: "Galería de Proyectos",
        gallerySubtitle: "Explora algunos de mis trabajos más destacados. Puedes filtrar los proyectos por tecnología utilizando los botones a continuación.",
        pokedexJsTitle: "Pokédex Interactiva",
        pokedexJsDesc: "Aplicación con JS puro, efectos visuales únicos para cada tipo, scroll infinito y buscador en tiempo real.",
        pokedexReactTitle: "Pokedex con React",
        pokedexReactDesc: "Versión de la Pokédex construida con React, aprovechando componentes reutilizables y el manejo de estados.",
        checkinTitle: "Check-In Garage (SaaS)",
        checkinDesc: "Aplicación completa para la gestión de talleres mecánicos, con roles para administradores y clientes.",
        expenseTrackerTitle: "Gestor de Gastos",
        expenseTrackerDesc: "Aplicación interactiva con HTML, CSS y JS puro para registrar ingresos y gastos, con persistencia de datos en `localStorage`.",
        viewProjectBtn: "Ver Proyecto",
        viewCodeBtn: "Ver Código",
        backToMainBtn: "← Volver a la página principal"
    },
    en: {
        // --- TEXTO PÁGINA PRINCIPAL (index.html) ---
        pageTitle: "María López Luengo - Web Developer",
        navAbout: "About Me",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Hello, I'm María López Luengo.",
        heroSubtitle: "A passionate Web Developer focused on creating clean, functional, and user-centered solutions.",
        heroButton: "See my projects",
        aboutTitle: "About Me",
        aboutText: "With previous experience in high-pressure environments, I have developed strong resilience and analytical thinking, skills that I now apply to build robust software. I specialize in the PHP ecosystem with Laravel and enjoy creating interactive experiences with JavaScript and React.",
        projectsTitle: "Featured Projects",
        p1Title: "Check-In Garage",
        p1Description: "Complete SaaS application for the comprehensive management of mechanical workshops, with roles for administrators and clients.",
        p2Title: "Interactive CV",
        p2Description: "This very portfolio. A dynamic project built with HTML, CSS, and JavaScript to load data and offer multi-language support.",
        repoButton: "View Repository",
        contactTitle: "Get in touch",
        contactText: "You can find me on LinkedIn, see more of my code on GitHub, or send me an email.",

        // --- NUEVO TEXTO PÁGINA DE PROYECTOS (proyecto.html) ---
        projectsPageTitle: "Projects - María López Luengo",
        galleryTitle: "Project Gallery",
        gallerySubtitle: "Explore some of my most notable work. You can filter projects by technology using the buttons below.",
        pokedexJsTitle: "Interactive Pokédex",
        pokedexJsDesc: "Application with pure JS, unique visual effects for each type, infinite scroll, and a real-time search.",
        pokedexReactTitle: "Pokédex with React",
        pokedexReactDesc: "Version of the Pokédex built with React, leveraging reusable components and state management.",
        checkinTitle: "Check-In Garage (SaaS)",
        checkinDesc: "Complete application for managing auto repair shops, with roles for administrators and clients.",
        expenseTrackerTitle: "Expense Tracker",
        expenseTrackerDesc: "Interactive application with pure HTML, CSS, and JS to track income and expenses, with data persistence in `localStorage`.",
        viewProjectBtn: "View Project",
        viewCodeBtn: "View Code",
        backToMainBtn: "← Back to the main page"
    }
};

// Función para aplicar la traducción
const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('language', lang);
};

// --- ESTRUCTURA DE MÓDULO CORRECTA ---
// Envolvemos la lógica de inicialización en una función y la EXPORTAMOS
export function initializeTranslator() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
}