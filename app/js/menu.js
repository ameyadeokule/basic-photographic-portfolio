const hamburgerBtnElt = document.getElementById('hamburger');
var menuActive = false;

hamburgerBtnElt.addEventListener('click', (e) => {
    menuActive = !menuActive;
    document.getElementById('menu').classList.toggle('header__menu--active');
    document.getElementById('menu-bg-mobile').classList.toggle('menu-bg-mobile--active');
    document.getElementsByClassName('header__cta')[0].classList.toggle('header__cta--visible');
    document.body.style.overflow = menuActive ? "hidden" : "auto";   
});

