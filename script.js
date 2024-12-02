document.addEventListener('DOMContentLoaded', () => {
    // Particle Background
    particlesJS('particles-js', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#00f0ff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f0ff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });

    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (root.classList.contains('dark-mode')) {
            root.classList.remove('dark-mode');
            themeToggle.innerHTML = `<i class="ri-moon-line"></i>`;
        } else {
            root.classList.add('dark-mode');
            themeToggle.innerHTML = `<i class="ri-sun-line"></i>`;
        }
    });

    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('data-section'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form Validation (Contact Form)
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
});
