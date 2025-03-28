document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    function checkScroll() {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled');          
            navbar.classList.add('scrolled');  
        } else {
            header.classList.remove('scrolled');            
            navbar.classList.remove('scrolled');
        }

        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
            menuToggle.classList.remove('fa-times');
            menuToggle.classList.add('fa-bars');
        }
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);


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
        speed: 700,  // Vitesse de transition
        effect: 'fade',  // Ou 'fade' si tu préfères
    });
});
