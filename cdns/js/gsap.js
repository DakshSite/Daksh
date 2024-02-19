function gsapFun(){
    // Home
    var tl = gsap.timeline();
    tl.from(".nav",{
        opacity:0,
    });
    tl.from(".nav .logo, .nav .links a,.nav #mobileNavBtn",{
        stagger:0.05,
        y:-20,
        opacity:0,
    });
    tl.from(".content1 > div, .content2,.content2 div:nth-child(1), .content2 div:nth-child(2)",{
        opacity:0,
        stagger:0.05,
        y:-20,
    });




    // About
    gsap.to(".content2 > div:nth-child(1) > img:nth-child(1)",{
        y:150,
        scrollTrigger: {
            trigger: ".content2",
            scroller: "body",
            // markers: true,
            start: "top 30%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    gsap.to(".content2 > .aboutMe",{
        marginTop:200,
        scale: 1,
        scrollTrigger: {
            trigger: ".content2",
            scroller: "body",
            // markers: true,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 2,
        }
    });





    // skillsContent
    gsap.from(".skillsContent > div:nth-child(1) > div, .skillsContent > div:nth-child(1) > span",{
        opacity:0,
        y:50,
        stagger:0.5,
        scrollTrigger: {
            trigger: ".skillsContent > div:nth-child(1)",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    gsap.from(".skillsContent > div:nth-child(2)",{
        opacity:0,
        y:50,
        scrollTrigger: {
            trigger: ".skillsContent > div:nth-child(2)",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    gsap.from(".skillsContent > div:nth-child(2) > div > div",{
        opacity:0,
        x:50,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".skillsContent > div:nth-child(2) > div",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
        }
    });








    // Projects
    gsap.from(".content3 > div:nth-child(1) > div",{
        y:-20,
        opacity:0,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".content3 > div:nth-child(1)",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    gsap.from(".content3 > div:nth-child(2) > .card",{
        opacity:0,
        scale:1.1,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".content3 > div:nth-child(2)",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
        }
    });




    // Contact
    gsap.to(".content4 > div",{
        opacity:1,
        scrollTrigger: {
            trigger: ".content4 > div",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    gsap.to(".content4 > form",{
        opacity:1,
        scale:1,
        scrollTrigger: {
            trigger: ".content4 > form",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1,
        }
    });





    // Footer
    var tl2 = gsap.timeline();
    tl2.from(".footer",{
        opacity:0,
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
        }
    });
    tl2.from(".footer > div:nth-child(1) > div",{
        y:20,
        opacity:0,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
        }
    });

};