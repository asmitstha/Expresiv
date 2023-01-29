

(function () {
    var words = ["Websites", "Products", "Programms"],
        i = 0;
    setInterval(function () {
        $('#words').fadeOut(function () {
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
    }, 2000)
})();

setTimeout(function () {
    $(".page-title").addClass("visible");
}, 50);

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".card");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        //end: () => "+=1000"
        end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth - 20,
        //markers: true,
    }
});

