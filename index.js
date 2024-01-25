document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function (){

    var arrow = document.getElementById("scroll-to-top");
    var navbar = document.querySelector("nav");

    window.onscroll = function() {
        if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            arrow.style.display = "block";
        } else {
            arrow.style.display = "none";
        }


        if( window.scrollY > navbar.offsetTop){
            navbar.classList.add("sticky");
        }else {
            navbar.classList.remove("sticky");
        }
    };

    arrow.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
});

gsap.from ('.home--info', {opacity:0, duration: 1, delay: 1.0, y: 20})
gsap.from ('.hero--img', {opacity:0, duration:1, delay: 1.5, y: 25})

gsap.from ('.about--content', {opacity:0, duration: 1, delay: 2.4, y: 30})
gsap.from ('.about', {opacity:0, duration: 1, delay: 2.6, y: 30})