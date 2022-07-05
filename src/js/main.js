import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".h-about", {
    scrollTrigger:{
        trigger:'.h-about',
        markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
    //   end: "top start", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    x: 420,
    duration:3,


  });

  gsap.to(".h-contact", {
    scrollTrigger:{
        trigger:'.h-contact',
        markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
    //   end: "top start", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    x: 420,
    duration:3,


  });

  gsap.to(".h-skills", {
    scrollTrigger:{
        trigger:'.h-skills',
        markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
    //   end: "top start", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    x: -520,
    duration:3,


  });