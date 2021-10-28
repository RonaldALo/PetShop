const loginform = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
    menu.classList.remove('active');
}

const menu = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
    loginform.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    loginform.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');

    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');

    } else {
        document.querySelector('.header').classList.remove('active');
    }
}