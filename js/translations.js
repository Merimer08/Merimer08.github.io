// 1. Objeto con todas las traducciones
const translations = {
    es: {
        pageTitle: "María López Luengo - Desarrolladora Web",
        logoText: "MLL.dev",
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
        contactText: "Puedes encontrarme en LinkedIn, ver más de mi código en GitHub o enviarme un correo."
    },
    en: {
        pageTitle: "María López Luengo - Web Developer",
        logoText: "MLL.dev",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Hello, I'm María López Luengo.",
        heroSubtitle: "A passionate Web Developer focused on creating clean, functional, and user-centric solutions.",
        heroButton: "View my projects",
        aboutTitle: "About Me",
        aboutText: "With previous experience in high-pressure environments, I have developed great resilience and analytical thinking, skills that I now apply to build robust software. I specialize in the PHP ecosystem with Laravel and enjoy creating interactive experiences with JavaScript and React.",
        projectsTitle: "Featured Projects",
        p1Title: "Check-In Garage",
        p1Description: "A complete SaaS application for the comprehensive management of mechanic workshops, with roles for administrators and clients.",
        p2Title: "Interactive CV",
        p2Description: "This very portfolio. A dynamic project built with HTML, CSS, and JavaScript to load data and provide multi-language support.",
        repoButton: "View Repository",
        contactTitle: "Get in Touch",
        contactText: "You can find me on LinkedIn, see more of my code on GitHub, or send me an email."
    }
};

// 2. Función para cambiar el idioma
const setLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.textContent = translations[lang][key];
    });
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
};

// 3. Event Listeners para los botones
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el enlace recargue la página
            const lang = button.getAttribute('data-lang');
            
            // Actualiza la clase 'active'
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Cambia el idioma
            setLanguage(lang);
        });
    });
    
    // Opcional: Establecer el idioma por defecto al cargar la página
    setLanguage('es');
});