import { gsap, random } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default class ScrollEffect {
    constructor() {
        this.init();
    }

    init() {
        this.onScrollAnimation();
        this.pageTop();
    }

    onScrollAnimation() {
        // 初期設定
        gsap.set('.about__catch', { opacity: 0, scale: 0.5 });
        gsap.set('.about__catch__slime', { opacity: 0, scale: 1 });
        gsap.set('.about__catch__slime.-slime1', { x: '250%', y: '250%', rotate: 360 * 7 });
        gsap.set('.about__catch__slime.-slime2', { x: '-150%', y: '200%' , rotate: -360 * 4});
        gsap.set('.about__catch__slime.-slime3', { x: '-270%', y: '0%', rotate: 360 * 6 });
        gsap.set('.about__catch__slime.-slime4', { x: '220%', y: '-130%', rotate: 360 * 5 });
        gsap.set('.about__catch__slime.-slime5', { x: '-100%', y: '-280%', rotate: -360 * 4 });
        gsap.set('.about__catch__slime.-slime6', { x: '-120%', y: '-130%', rotate: 360 * 7 });

        const tl = gsap.timeline({ paused: true });

        tl.to('.about__catch__slime', { duration: 1.0, opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, stagger: 0.05, ease: 'circ.out' }, 0);
        tl.to('.about__catch', { duration: 0.8, opacity: 1, scale: 1, ease: 'bounce.out' }, '<');

        ScrollTrigger.create({
            trigger: '.about__catch',
            start: 'top 90%',
            markers: true,
            onEnter: () => {
                tl.play();
            },
            // onLeaveBack: () => {
            //     tl.pause(0);
            // },
        });
    }

    pageTop() {
        const pagetop = [...document.querySelectorAll('.js-pagetop')];
        pagetop.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: 'circ.inOut' });
            });
        });
    }
}
