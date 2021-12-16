const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#side-menu');

btn.addEventListener('click', e => {
    menu.classList.toggle("menu-collapsed");
    menu.classList.toggle("menu-expanded");
    document.querySelector('body').classList.toggle('body-expanded');
});

