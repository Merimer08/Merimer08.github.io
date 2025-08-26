// js/translations.js

function initTranslations() {
    // 1. Diccionario de traducciones
    const translations = {
        es: {
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
            contactText: "Puedes encontrarme en LinkedIn, ver más de mi código en GitHub o enviarme un correo."
        },
        en: {
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
            contactText: "You can find me on LinkedIn, see more of my code on GitHub, or send me an email."
        }
    };

    // 2. Botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn');

    // 3. Función para aplicar traducciones
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        // activar/desactivar botón correcto
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('language', lang);
    };

    // 4. Eventos en botones
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // 5. Cargar idioma guardado o español por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
}

// Lanza traducciones al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', initTranslations);
