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
        gsap.set('.mv.-top .mv__maincatch', { opacity: 0, scale: 1.3 });
        gsap.set('.mv.-top .mv__logo', { opacity: 0, scale: 1.5, rotation: -360 * 1 });
        gsap.set('.mv.-top .mv__chara.-sally', { opacity: 0, x: '-10%', y: '20%' });
        gsap.set('.mv.-top .mv__chara.-brown', { opacity: 0, x: '10%', y: '20%' });
        gsap.set('.mv.-top .mv__dl,.mv.-top .mv__links', { opacity: 0, y: 20 });

        const tl1 = gsap.timeline({ paused: true });

        tl1.to('.mv.-top .mv__maincatch', { duration: 0.6, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)' }, 0.2);
        tl1.to('.mv.-top .mv__maincatch', { duration: 0.05, x: '-5%', repeat: 9, yoyo: true, ease: 'power1.in' }, '<');
        tl1.to('.mv.-top .mv__logo', { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: 'elastic.out(1,0.3)' }, '<0.5');
        tl1.to('.mv.-top .mv__chara', { duration: 0.6, stagger: 0.2, opacity: 1, x: 0, y: 0, ease: 'power2.out' }, '<1.0');
        tl1.to('.mv.-top .mv__dl,.mv.-top .mv__links', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out' }, '<0.6');

        ScrollTrigger.create({
            trigger: '.mv.-top',
            start: 'top center',
            onEnter: () => {
                tl1.play();
            },
        });

        // 初期設定
        gsap.set('.about__catch', { opacity: 0, scale: 0.5 });
        gsap.set('.about__catch__slime', { opacity: 0, scale: 1 });
        gsap.set('.about__catch__slime.-slime1', { x: '250%', y: '250%', rotate: 360 * 7 });
        gsap.set('.about__catch__slime.-slime2', { x: '-150%', y: '200%', rotate: -360 * 4 });
        gsap.set('.about__catch__slime.-slime3', { x: '-270%', y: '0%', rotate: 360 * 6 });
        gsap.set('.about__catch__slime.-slime4', { x: '220%', y: '-130%', rotate: 360 * 5 });
        gsap.set('.about__catch__slime.-slime5', { x: '-100%', y: '-280%', rotate: -360 * 4 });
        gsap.set('.about__catch__slime.-slime6', { x: '-120%', y: '-130%', rotate: 360 * 7 });

        const tl2 = gsap.timeline({ paused: true });

        tl2.to('.about__catch__slime', { duration: 1.0, opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, stagger: 0.05, ease: 'circ.out' }, 0);
        tl2.to('.about__catch', { duration: 0.8, opacity: 1, scale: 1, ease: 'bounce.out' }, '<');

        ScrollTrigger.create({
            trigger: '.about__catch',
            start: 'top 90%',
            // markers: true,
            onEnter: () => {
                tl2.play();
            },
        });

        // 初期設定
        gsap.set('.keywords__cont__item__ttl .ttltxt', { opacity: 0, scale: 1.3 });
        gsap.set('.keywords__cont__item__movie', { opacity: 0, scale: 0, rotate: 30 });
        gsap.set('.keywords__cont__item__catch img', { clipPath: 'inset(0 100% 0 0)' });

        const keywordsArr = [...document.querySelectorAll('.keywords__cont__item')];

        keywordsArr.forEach((keyword) => {
            const tl3 = gsap.timeline({ paused: true });

            const ttltxt = keyword.querySelector('.ttltxt');
            const movie = keyword.querySelector('.keywords__cont__item__movie');
            const catchImg = keyword.querySelector('.keywords__cont__item__catch img');

            tl3.to(ttltxt, { duration: 0.6, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)' }, 0.2);
            tl3.to(ttltxt, { duration: 0.05, x: '-5%', repeat: 9, yoyo: true, ease: 'power1.in' }, '<');
            tl3.to(movie, { duration: 1.0, opacity: 1, scale: 1, rotate: 0, ease: 'back.inOut' }, '<0.2');
            tl3.to(catchImg, { duration: 0.8, clipPath: 'inset(0 0% 0 0)', ease: 'power2.inOut' }, '<0.6');

            ScrollTrigger.create({
                trigger: keyword,
                start: 'top 90%',
                // markers: true,
                onEnter: () => {
                    tl3.play();
                },
            });
        });

        // 初期設定
        gsap.set('.mv.-bottom .mv__logo', { opacity: 0, scale: 1.5, rotation: -360 * 1 });
        gsap.set('.mv.-bottom .mv__dl,.mv.-bottom .mv__links', { opacity: 0, y: 20 });

        const tl4 = gsap.timeline({ paused: true });

        tl4.to('.mv.-bottom .mv__logo', { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: 'elastic.out(1,0.3)' }, 0.2);
        tl4.to('.mv.-bottom .mv__dl,.mv.-bottom .mv__links', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out' }, '<0.6');

        ScrollTrigger.create({
            trigger: '.mv.-bottom',
            start: 'top center',
            onEnter: () => {
                tl4.play();
            },
        });

        const wrapper = document.querySelector('.wrapper');

        ScrollTrigger.create({
            trigger: '.about',
            start: 'top center',
            onEnter: () => {
                wrapper.classList.add('-scrolled');
            },
            onLeaveBack: () => {
                wrapper.classList.remove('-scrolled');
            },
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
