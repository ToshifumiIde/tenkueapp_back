'use strict';

{
    const NAV = document.getElementById('hamburgerMenu');
    const HAMBURGER_LINES = document.querySelectorAll('.l-hamburger__line');
    const NAV_MENU = document.querySelector('.l-nav__toggle__menu');
    const NAV_LISTS = document.querySelectorAll('.l-nav__toggle__menu .l-header-nav__list');

    NAV.addEventListener('click', () => {
        HAMBURGER_LINES.forEach(hamLine => {
            hamLine.classList.toggle('is-clicked');
        });
        NAV_LISTS.forEach(NAV_LIST => {
            NAV_LIST.classList.toggle('is-clicked');
        });
        NAV_MENU.classList.toggle('is-clicked');
    });
}
