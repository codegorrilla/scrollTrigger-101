//importing scss file
import '../scss/styles.scss';
import { gsap } from './gsap.js';

gsap.to('.square', {
	x: 1000,
	duration: 8,
	scrollTrigger: {
		trigger: '.square',
		start: 'top 80%',
		end: 'top 30%',
		//scrub: true,
		scrub: 4,
		toggleActions: 'restart none none none',
		markers: {
			startColor: 'purple',
			endColor: 'fuchsia',
			fontSize: '3rem',
		},
	},
});
