// Selectionne le bouton et le menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    navbar.classList.toggle('active');
});