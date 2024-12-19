import '../scss/styles.scss';

//importing GSAP and ScrollTrigger
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export * from 'gsap';

//standalone scrollTrigger
ScrollTrigger.create({
	trigger: '.box',
	start: 'top 80%',
	end: 'top 50%',
	markers: true,
	toggleClass: 'box-red',
	// onEnter: () => console.log('enter!'),
	// onLeave: () => console.log('leave!'),
	// onEnterBack: () => console.log('enterBack!'),
	// onLeaveBack: () => console.log('leaveBack!'),
	onUpdate: (self) => console.log(self),
});
