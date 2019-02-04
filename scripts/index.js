let mainNav = document.querySelector('#js_menu');
let sec = document.querySelector('#sec');

let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
    secondary.classList.toggle('active');

});
