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
  gsap.to(".screenshot-thejob", {
    scrollTrigger:{
        trigger:'.screenshot-thejob',
        // markers: true,
        start: "12% 50%", // when the top of the trigger hits the top of the viewport
      end: "0% 0%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -160,
    duration:3,
    ease: "none",


  });
  gsap.to(".screenshot-tab-thejob", {
    scrollTrigger:{
        trigger:'.screenshot-tab-thejob',
        // markers: true,
        start: "10% 50%", // when the top of the trigger hits the top of the viewport
      end: "15% 10%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -170,
    duration:3,
    ease: "none",

  });
  gsap.to(".screenshot-phone-thejob", {
    scrollTrigger:{
        trigger:'.screenshot-phone-thejob',
        // markers: true,
        start: "20% 50%", // when the top of the trigger hits the top of the viewport
      end: "6% 10%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -96,
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



  ///////////////////////project 4
  gsap.to(".project-mockup4", {
    scrollTrigger:{
        trigger:'.project-mockup4',
        // markers: true,
        start: "10% top", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-40",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup4-tab", {
    scrollTrigger:{
        trigger:'.project-mockup4-tab',
        // markers: true,
        start: "50% 80%", // when the top of the trigger hits the top of the viewport
      end: "40% 20%", // end
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: "-100",
    duration:2,
    // ease: "none",


  });
  gsap.to(".project-mockup4-phone", {
    scrollTrigger:{
        trigger:'.project-mockup4-phone',
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
  gsap.to(".screenshot-trava", {
    scrollTrigger:{
        trigger:'.screenshot-trava',
        // markers: true,
        start: "12% 50%", // when the top of the trigger hits the top of the viewport
      end: "20% 12%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -240,
    duration:3,
    ease: "none",


  });
  gsap.to(".screenshot-tab-trava", {
    scrollTrigger:{
        trigger:'.screenshot-tab-trava',
        // markers: true,
        start: "14% 50%", // when the top of the trigger hits the top of the viewport
      end: "80% 10%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -180,
    duration:3,
    ease: "none",

  });
  gsap.to(".screenshot-phone-trava", {
    scrollTrigger:{
        trigger:'.screenshot-phone-trava',
        // markers: true,
        start: "15% 40%", // when the top of the trigger hits the top of the viewport
      end: "6% 20%", // end after scrolling 500px beyond the start
        // pin: true,   // pin the trigger element while active,
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }, // start the animation when ".box" enters the viewport (once)
    y: -70,
    duration:3,
    ease: "none",


  });



 /////////////////////////////all projects title and description
  const opToggle = function(el){
      el.classList.toggle('op100');
  }

  const overlay1 = document.querySelectorAll('#overlay1');
  const overlay2 = document.querySelectorAll('#overlay2');
  const overlay3 = document.querySelectorAll('#overlay3');
  const overlay4 = document.querySelectorAll('#overlay4');
  
  const projectDescription1 = document.querySelector('.project-description1');
  const projectDescription2 = document.querySelector('.project-description2');
  const projectDescription3 = document.querySelector('.project-description3');
  const projectDescription4 = document.querySelector('.project-description4');
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

  ScrollTrigger.create({
    trigger: ".project4",
    start: "top center",
    end: "+=1800",
    onToggle: self => {
      opToggle(projectDescription4)
      overlay4.forEach((e)=>{
        // console.log(e)
        e.classList.toggle('overlay')
      })
    }
  });