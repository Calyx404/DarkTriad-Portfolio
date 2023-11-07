/** Concept Checklist
    * [*] Objects
    * [*] Functions
    * [*] Conditionals
    * [*] Loops
    * [*] Variables
    * [*] Operators

*/

// toggle icon on navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let i = 0;
    while (i < sections.length) {
        let sec = sections[i];
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            let j = 0;
            while (j < navLinks.length) {
                let links = navLinks[j];
                links.classList.remove('active');
                if (links.getAttribute('href').includes(id)) {
                    links.classList.add('active');
                }
                j++;
            }
        }
        i++;
    }
    //  remove navbar menu on click 'x'
    menuIcon.classList.remove('bx-x');
    // remove toggle icon on navbar
    navbar.classList.remove('active');
};

// color invertion on click
let darkModeIcon = document.querySelector('#invert');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bxs-moon');
    document.body.classList.toggle('invertMode');
};

// reveal elements on scroll
ScrollReveal({
    distance: '2rem',
    duration: 3000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .services-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

//infinite loop slider by Swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// learn more on click
function Refresh() {
    window.open("index.html", '_self');
};

