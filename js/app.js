const navIcon = document.querySelector('#icon-bar');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

navIcon.onclick = () => { 
    navIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active'); 
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    navIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay : 200,

});

ScrollReveal().reveal('.home-content, heading',{origin :'top'});
ScrollReveal().reveal('.skill-container,.box,Contact form',{origin: 'buttom'});
ScrollReveal().reveal('.home-content h1,',{origin : 'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});