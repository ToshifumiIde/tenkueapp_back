'use strict';

{
    const nav = document.getElementById('hamburgerMenu');
    const hamburgerLines = document.querySelectorAll('.l-hamburger__line');
    const navMenu = document.querySelector('.l-nav__toggle__menu');
    const navLists = document.querySelectorAll('.l-nav__toggle__menu .l-header-nav__list');

    nav.addEventListener('click', () => {
        hamburgerLines.forEach(hamLine => {
            hamLine.classList.toggle('is-clicked');
        });
        navLists.forEach(navList => {
            navList.classList.toggle('is-clicked');
        });
        navMenu.classList.toggle('is-clicked');
    });
}
