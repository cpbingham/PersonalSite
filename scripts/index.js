let mainNav = document.querySelector('.main_nav');
let secondaryNav = document.querySelector('.secondary_nav');

let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
    secondaryNav.classList.toggle('active');

});
