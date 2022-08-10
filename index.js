const mainNav = document.querySelector('.navbar');
const title = document.querySelector('.title');
const arrow = document.querySelector('.arrow');
const navBarToggle = document.querySelector('.nav-toggle');

navBarToggle.addEventListener('click', () => {
    arrow.classList.toggle("none");
    title.classList.toggle("none");
    mainNav.classList.toggle("active");
});