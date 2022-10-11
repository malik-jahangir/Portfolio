import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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

  gsap.to(".screenshot-f", {
    scrollTrigger:{
        trigger:'.screenshot-f',
        // markers: true,
        start: "12% 50%", // when the top of the trigger hits the top of the viewport
      end: "0% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -193,
    duration:3,
    ease: "none",


  });
  gsap.to(".project-mockup1", {
    scrollTrigger:{
        trigger:'.project-mockup1',
        // markers: true,
        start: "10% top", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-130",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockups-tab1", {
    scrollTrigger:{
        trigger:'.project-mockups-tab',
        // markers: true,
        start: "50% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-130",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockups-tab1-2", {
    scrollTrigger:{
        trigger:'.project-mockups-tab2',
        // markers: true,
        start: "60% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
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

  ///////////////////////project 2
  gsap.to(".project-mockup2", {
    scrollTrigger:{
        trigger:'.project-mockup2',
        // markers: true,
        start: "10% top", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-100",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup2-tab", {
    scrollTrigger:{
        trigger:'.project-mockup2-tab',
        // markers: true,
        start: "50% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-100",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup2-phone", {
    scrollTrigger:{
        trigger:'.project-mockup2-phone',
        // markers: true,
        start: "60% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-60",
    duration:2,
    // ease: "none",


  });


  //////////screenshots
  gsap.to(".screenshot-t", {
    scrollTrigger:{
        trigger:'.screenshot-t',
        // markers: true,
        start: "12% 58%", // when the top of the trigger hits the top of the viewport
      end: "0% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -180,
    duration:3,
    ease: "none",


  });
  gsap.to(".screenshot-tab-t", {
    scrollTrigger:{
        trigger:'.screenshot-tab-t',
        // markers: true,
        start: "10% 50%", // when the top of the trigger hits the top of the viewport
      end: "15% 0%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -188,
    duration:3,
    ease: "none",

  });
  gsap.to(".screenshot-phone-t", {
    scrollTrigger:{
        trigger:'.screenshot-phone-t',
        // markers: true,
        start: "20% 70%", // when the top of the trigger hits the top of the viewport
      end: "6% 0%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -240,
    duration:3,
    ease: "none",


  });

  ///////////////////////project 3
  gsap.to(".project-mockup3", {
    scrollTrigger:{
        trigger:'.project-mockup3',
        // markers: true,
        start: "10% top", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-80",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup3-tab", {
    scrollTrigger:{
        trigger:'.project-mockup3-tab',
        // markers: true,
        start: "50% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-120",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup3-phone", {
    scrollTrigger:{
        trigger:'.project-mockup3-phone',
        // markers: true,
        start: "60% bottom", // when the top of the trigger hits the top of the viewport
      end: "+=600", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-80",
    duration:2,
    // ease: "none",


  });


  //////////screenshots
  gsap.to(".screenshot-c", {
    scrollTrigger:{
        trigger:'.screenshot-c',
        // markers: true,
        start: "12% 50%", // when the top of the trigger hits the top of the viewport
      end: "0% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -180,
    duration:3,
    ease: "none",


  });
  gsap.to(".screenshot-tab-c", {
    scrollTrigger:{
        trigger:'.screenshot-tab-c',
        // markers: true,
        start: "12% 50%", // when the top of the trigger hits the top of the viewport
      end: "0% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -180,
    duration:3,
    ease: "none",

  });
  gsap.to(".screenshot-phone-c", {
    scrollTrigger:{
        trigger:'.screenshot-phone-c',
        // markers: true,
        start: "15% 40%", // when the top of the trigger hits the top of the viewport
      end: "6% 20%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -30,
    duration:3,
    ease: "none",


  });

 /////////////////////////////common 
  const opToggle = function(el){
      el.classList.toggle('op100');
  }

  const overlay1 = document.querySelectorAll('#overlay1');
  const overlay2 = document.querySelectorAll('#overlay2');
  const overlay3 = document.querySelectorAll('#overlay3');
  
  const projectDescription1 = document.querySelector('.project-description1');
  const projectDescription2 = document.querySelector('.project-description2');
  const projectDescription3 = document.querySelector('.project-description3');
  const projectMockup = document.querySelector('.project-mockups')
  ScrollTrigger.create({
    trigger: ".project1",
    start: "top center",
    end: "+=1800",
    onToggle: self => {
      opToggle(projectDescription1)
      overlay1.forEach((e)=>{
        // console.log(e)
        e.classList.toggle('overlay')
      })
    }
  });

  ScrollTrigger.create({
    trigger: ".project2",
    start: "top center",
    end: "+=1800",
    onToggle: self => {
      opToggle(projectDescription2)
      overlay2.forEach((e)=>{
        // console.log(e)
        e.classList.toggle('overlay')
      })
    }
  });

  ScrollTrigger.create({
    trigger: ".project3",
    start: "top center",
    end: "+=1800",
    onToggle: self => {
      opToggle(projectDescription3)
      overlay3.forEach((e)=>{
        // console.log(e)
        e.classList.toggle('overlay')
      })
    }
  });