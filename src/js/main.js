'use strict';
const aboutHeading = document.querySelector('.h-about');
console.log(aboutHeading)
new simpleParallax(aboutHeading, {
    orientation: 'right',
	overflow: true,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',

});