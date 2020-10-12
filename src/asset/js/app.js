'use strict';

{
    const nav = document.getElementById('hamburgerMenu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    const navMenu = document.querySelector('.nav-toggle-menu');
    const navLists = document.querySelectorAll('.nav-toggle-menu .header-nav__list');

    nav.addEventListener('click', () => {
        hamburgerLines.forEach(hamLine => {
            hamLine.classList.toggle('clicked');
        });
        navLists.forEach(navList => {
            navList.classList.toggle('clicked');
        });

        navMenu.classList.toggle('clicked');
    });
}
