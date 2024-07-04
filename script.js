// cicrle gsap use in ...

function cicrle() {
    var hero = document.querySelector("#page1");
    var circle = document.querySelector("#circle1");
    hero.addEventListener("mousemove", function (gelo) {
        gsap.to("#circle1", {
            x: gelo.x,
            y: gelo.y
        })
    })
    hero.addEventListener("mouseenter", function () {
        gsap.to("#circle1", {
            scale: 1,
            opacity: 1
        })
    })
    hero.addEventListener("mouseleave", function () {
        gsap.to("#circle1", {
            scale: -0,
            opacity: 0
        })
    })
}

cicrle()


function locomotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });

}
locomotive()

function page4_Imagechange() {
    var elems = document.querySelectorAll(".elem")
    var page4 = document.querySelector("#page4")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page4.style.backgroundImage = `url(${bgimg})`
        })
    })
}
page4_Imagechange()

function sliderjs() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteracion: true
        }
    });
}

sliderjs()