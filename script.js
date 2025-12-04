const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('open');
});

// Cerrar si se hace clic afuera
window.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('open');
    }
});