//importing scss file
import '../scss/styles.scss';
import { gsap } from './gsap.js';

gsap.to('.square', {
	x: 1000,
	duration: 8,
	scrollTrigger: {
		trigger: '.square',
		start: 'top 60%',
		end: 'top 40%',
		//end: () => `+=${document.querySelector('.square').offsetHeight}`,
		// markers: {
		// 	startColor: 'purple',
		// 	endColor: 'fuchsia',
		// 	fontSize: '4rem',
		// 	indent: 200,
		// },
		toggleActions: 'restart pause resume reverse',
		//  onEnter onLeave onEnterBack onLeaveBack

		//additional value: play, complete, reset, none
		markers: {
			startColor: 'purple',
			endColor: 'fuchsia',
			fontSize: '3rem',
		},
		//markers: true,
		toggleClass: 'red',
	},
});
