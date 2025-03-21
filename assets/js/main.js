// Selectionne le bouton et le menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
      // Changer l'icône entre "fa-bars" et "fa-times"
      if (navbar.classList.contains('show')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
});