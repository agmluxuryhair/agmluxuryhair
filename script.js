// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos animables
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
        header.style.background = 'rgba(26, 15, 46, 0.95)';
    } else {
        header.style.padding = '1rem 0';
        header.style.background = 'linear-gradient(135deg, #1a0f2e 0%, #2a1a4d 100%)';
    }
    
    lastScroll = currentScroll;
});

// Función para abrir WhatsApp
function openWhatsApp() {
    // Reemplaza con tu número de WhatsApp (incluye código de país sin +)
    const phoneNumber = '573160401117'; // Colombia: 3160401117
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre las extensiones de cabello AGM Luxury Hair.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Función para abrir Instagram
function openInstagram() {
    // Reemplaza con tu usuario de Instagram
    window.open('https://www.instagram.com/agmluxuryhair', '_blank');
}

console.log('🌟 AGM Luxury Hair - Sitio web cargado exitosamente');
