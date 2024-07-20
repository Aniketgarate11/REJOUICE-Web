function cursorEvent() {
    let cursor = document.getElementById("cursor");
    let page1 = document.querySelector(".page1-content");
    page1.addEventListener('mousemove', function (e) {
        /*  //traditional method to do
          cursor.style.left = e.x +"px";
          cursor.style.top = e.y +"px";
          */

        //using gsap lib is accepts two paras ele and fun
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
        })
    });

    page1.addEventListener("mouseenter", function () {
        // cursor.style.opacity = '1px';

        gsap.to(cursor, {
            // scale:1,
            opacity: 1
        })

    });
    page1.addEventListener("mouseleave", function () {
        // cursor.style.opacity = "0px";

        gsap.to(cursor, {
            // scale:0,
            opacity: 0
        })
    })

}
cursorEvent();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "body",
            start: "top 40%",
            end: "top 46%",
            // marker:true,
            scrub: 2
        }
    })
    gsap.from("#page2-top", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "body",
            start: "top 40%",
            end: "top 46%",
            scrub: 2
        }
    })
}
page2Animation();

function page3Animation() {
    let page3 = document.querySelector(".page-3")
    page3.addEventListener('mousemove', function (e) {
        console.log(e);

    })
    gsap.from(".elem h1", {
        y: 440,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page-3",
            scroller: "body",
            // start:"top 60%",
            // end:"top 90%",
            // marker:true,
            scrub: 2
        }
    })

}
// page3Animation();

function page4Cursor() {
    let cursor2 = document.getElementById('cursor2');
    let page4 = document.querySelector('.page-4');
    page4.addEventListener("mousemove", (e) => {
        console.log(e);
        //traditional method to do
        cursor2.style.left = e.x + "px";
        cursor2.style.top = e.y + "px"
    });

    page4.addEventListener("mouseenter", function () {
        // cursor2.style.opacity = '1px';
        // cursor2.style.scale ='1px';


        gsap.to(cursor2, {
            scale:1,
            opacity: 1
        })

    });
    page4.addEventListener("mouseleave", function () {
        // cursor2.style.opacity = "0px";
        // cursor2.style.scale = "0px";

        gsap.to(cursor2, {
            scale:0,
            opacity: 0
        })
    })
}
page4Cursor();

function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
    });

}
sliderAnimation();

function loaderAnimation() {

    var tl = gsap.timeline()
    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });
    tl.to("#loader h3", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 1
    });
    tl.to("#loader", {
        opacity: 0,
    });
    tl.to("#loader", {
        display: "none"
    });
    tl.from(".page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5
    });
}
loaderAnimation();

