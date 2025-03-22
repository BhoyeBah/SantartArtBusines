document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    
    // Fonction pour vérifier si le header doit avoir la classe "scrolled"
    function checkScroll() {
        if (window.scrollY > 50) { // Si l'utilisateur a défilé de plus de 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Vérifie l'état du défilement au chargement initial
    checkScroll();

    // Ajoute un événement de défilement
    window.addEventListener('scroll', checkScroll);
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
        menuToggle.classList.toggle('fa-times');
        menuToggle.classList.toggle('fa-bars');
    });

    // Swiper initialization
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 600,  // Vitesse de transition
        effect: 'fade',  // Ou 'fade' si tu préfères
    });
});
