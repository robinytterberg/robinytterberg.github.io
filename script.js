document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    // Förhindra att klick utanför menyn stänger menyn om den är öppen
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});
