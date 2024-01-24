document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

gsap.from ('.home--info', {opacity:0, duration: 1, delay: 1.0, y: 20})
gsap.from ('.hero--img', {opacity:0, duration:1, delay: 1.5, y: 25})

gsap.from ('.about--content', {opacity:0, duration: 1, delay: 2.4, y: 30})
gsap.from ('.about', {opacity:0, duration: 1, delay: 2.6, y: 30})