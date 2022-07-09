import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import LocomotiveScroll from "locomotive-scroll";


gsap.to(".h-about", {
    scrollTrigger:{
        trigger:'.h-about',
        // markers: true,
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
        // markers: true,
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
        // markers: true,
        // scroller: "[data-scroll-container]",
        // start: "top top", // when the top of the trigger hits the top of the viewport
    //   end: "top start", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    x: -520,
    duration:3,


  });

  gsap.to(".screenshot-ft", {
    scrollTrigger:{
        trigger:'.screenshot-ft',
        // markers: true,
        start: "10% 50%", // when the top of the trigger hits the top of the viewport
      end: "0% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -193,
    duration:3,
    ease: "none",


  });
  gsap.to(".project-mockups", {
    scrollTrigger:{
        trigger:'.project-mockups',
        markers: true,
        start: "10% top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-130",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockups-tab", {
    scrollTrigger:{
        trigger:'.project-mockups-tab',
        markers: true,
        start: "50% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-130",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockups-tab2", {
    scrollTrigger:{
        trigger:'.project-mockups-tab2',
        markers: true,
        start: "60% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-160",
    duration:2,
    // ease: "none",


  });


  // gsap.to(".screenshot", {
  //   scrollTrigger:{
  //       trigger:'.screenshot',
  //       markers: true,
  //       start: "10% 50%", // when the top of the trigger hits the top of the viewport
  //     end: "0% 12%", // end after scrolling 500px beyond the start
  //       // pin: true,   // pin the trigger element while active,
  //       scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //   }, // start the animation when ".box" enters the viewport (once)
  //   y: -687,
  //   duration:3,
  //   ease: "none",


  // });
  // gsap.to(".project-mockups", {
  //   scrollTrigger:{
  //       trigger:'.project-mockups',
  //       // markers: true,
  //       start: "-300", // when the top of the trigger hits the top of the viewport
  //     end: "+=600", // end after scrolling 500px beyond the start
  //       pin: true,   // pin the trigger element while active,
  //       // scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //   }, // start the animation when ".box" enters the viewport (once)
  //   // y: "100%",
  //   // duration:3,
  //   // ease: "none",


  // });

  const opToggle = function(el){
    console.log('toggle')
    el.classList.toggle('op100');
  }
  const projectDescription = document.querySelector('.project-description');
  const projectMockup = document.querySelector('.project-mockups')
  ScrollTrigger.create({
    trigger: ".project",
    start: "top center",
    end: "+=1500",
    onToggle: self =>  opToggle(projectDescription)
  });