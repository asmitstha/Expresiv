gsap.set('section.footer-container', { yPercent: -50 })
const uncover = gsap.timeline({ paused: true })
uncover.to('section.footer-container', { yPercent: 0, ease: 'none' });
ScrollTrigger.create({
    trigger: 'section.service',
    start: 'bottom bottom',
    end: '+=75%',
    animation: uncover,
    scrub: true,
    //markers: true,
})

