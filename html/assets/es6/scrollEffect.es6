import { gsap, random } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class ScrollEffect {
    constructor() {
        this.init();
        this.charas = document.querySelectorAll('.js-wide-chara');
        this.scrollEndTimer;
        this.onPageTopFlg = false;
        this.pageTopCharaY = 0;
        this.wideCharaTl;
    }

    init() {
        this.setupAnimations();
        this.setupScrollTriggers();
        this.setupPageTop();
        this.setupWideCharaAnimation();
    }

    setupAnimations() {
        this.animations = {
            mvTop: this.createMvTopAnimation(),
            aboutCatch: this.createAboutCatchAnimation(),
            keywords: this.createKeywordsAnimations(),
            mvBottom: this.createMvBottomAnimation(),
        };
    }

    setupScrollTriggers() {
        ScrollTrigger.create({
            trigger: '.mv.-top',
            start: 'top center',
            onEnter: () => this.animations.mvTop.play(),
        });

        ScrollTrigger.create({
            trigger: '.about__catch',
            start: 'top 90%',
            onEnter: () => this.animations.aboutCatch.play(),
        });

        this.animations.keywords.forEach(({ trigger, animation }) => {
            ScrollTrigger.create({
                trigger,
                start: 'top 90%',
                onEnter: () => animation.play(),
            });
        });

        ScrollTrigger.create({
            trigger: '.mv.-bottom',
            start: 'top center',
            onEnter: () => this.animations.mvBottom.play(),
        });

        const wrapper = document.querySelector('.wrapper');
        ScrollTrigger.create({
            trigger: '.about',
            start: 'top center',
            onEnter: () => wrapper.classList.add('-scrolled'),
            onLeaveBack: () => wrapper.classList.remove('-scrolled'),
        });

        ScrollTrigger.create({
            trigger: '.wrapper',
            start: 'top top',
            onUpdate: (self) => {
                this.animeCharaSprite(self);
                this.stopCharaSprite();
            },
        });
    }

    setupPageTop() {
        document.querySelectorAll('.js-pagetop').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.onPageTopFlg = true;
                el.classList.add('-move');
                this.animePageTop();
            });
        });
    }

    createMvTopAnimation() {
        gsap.set('.mv.-top .mv__maincatch', { opacity: 0, scale: 1.3 });
        gsap.set('.mv.-top .mv__logo', { opacity: 0, scale: 1.5, rotation: -360 });
        gsap.set('.mv.-top .mv__chara.-sally, .mv.-top .mv__chara.-brown', { opacity: 0, y: '20%' });
        gsap.set('.mv.-top .mv__chara.-sally', { x: '-10%' });
        gsap.set('.mv.-top .mv__chara.-brown', { x: '10%' });
        gsap.set('.mv.-top .mv__dl,.mv.-top .mv__links', { opacity: 0, y: 20 });

        const tl = gsap.timeline({ paused: true });
        tl.to('.mv.-top .mv__maincatch', { duration: 0.6, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)' }, 0.2)
            .to('.mv.-top .mv__maincatch', { duration: 0.05, x: '-5%', repeat: 9, yoyo: true, ease: 'power1.in' }, '<')
            .to('.mv.-top .mv__logo', { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: 'elastic.out(1,0.3)' }, '<0.5')
            .to('.mv.-top .mv__chara', { duration: 0.6, stagger: 0.2, opacity: 1, x: 0, y: 0, ease: 'power2.out' }, '<1.0')
            .to('.mv.-top .mv__dl,.mv.-top .mv__links', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out' }, '<0.6');

        return tl;
    }

    createAboutCatchAnimation() {
        gsap.set('.about__catch', { opacity: 0, scale: 0.5 });
        gsap.set('.about__catch__slime', { opacity: 0, scale: 1 });
        gsap.set('.about__catch__slime.-slime1', { x: '250%', y: '250%', rotate: 2520 });
        gsap.set('.about__catch__slime.-slime2', { x: '-150%', y: '200%', rotate: -1440 });
        gsap.set('.about__catch__slime.-slime3', { x: '-270%', y: '0%', rotate: 2160 });
        gsap.set('.about__catch__slime.-slime4', { x: '220%', y: '-130%', rotate: 1800 });
        gsap.set('.about__catch__slime.-slime5', { x: '-100%', y: '-280%', rotate: -1440 });
        gsap.set('.about__catch__slime.-slime6', { x: '-120%', y: '-130%', rotate: 2520 });

        const tl = gsap.timeline({ paused: true });
        tl.to('.about__catch__slime', { duration: 1.0, opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, stagger: 0.05, ease: 'circ.out' }, 0).to(
            '.about__catch',
            { duration: 0.8, opacity: 1, scale: 1, ease: 'bounce.out' },
            '<'
        );

        return tl;
    }

    createKeywordsAnimations() {
        gsap.set('.keywords__cont__item__ttl .ttltxt', { opacity: 0, scale: 1.3 });
        gsap.set('.keywords__cont__item__movie', { opacity: 0, scale: 0, rotate: 30 });
        gsap.set('.keywords__cont__item__catch img', { clipPath: 'inset(0 100% 0 0)' });

        const keywordsArr = [...document.querySelectorAll('.keywords__cont__item')];

        return keywordsArr.map((keyword) => {
            const tl = gsap.timeline({ paused: true });
            const ttltxt = keyword.querySelector('.ttltxt');
            const movie = keyword.querySelector('.keywords__cont__item__movie');
            const catchImg = keyword.querySelector('.keywords__cont__item__catch img');

            tl.to(ttltxt, { duration: 0.6, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)' }, 0.2)
                .to(ttltxt, { duration: 0.05, x: '-5%', repeat: 9, yoyo: true, ease: 'power1.in' }, '<')
                .to(movie, { duration: 1.0, opacity: 1, scale: 1, rotate: 0, ease: 'back.inOut' }, '<0.2')
                .to(catchImg, { duration: 0.8, clipPath: 'inset(0 0% 0 0)', ease: 'power2.inOut' }, '<0.6');

            return { trigger: keyword, animation: tl };
        });
    }

    createMvBottomAnimation() {
        gsap.set('.mv.-bottom .mv__logo', { opacity: 0, scale: 1.5, rotation: -360 });
        gsap.set('.mv.-bottom .mv__dl,.mv.-bottom .mv__links', { opacity: 0, y: 20 });

        const tl = gsap.timeline({ paused: true });
        tl.to('.mv.-bottom .mv__logo', { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: 'elastic.out(1,0.3)' }, 0.2).to(
            '.mv.-bottom .mv__dl,.mv.-bottom .mv__links',
            { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out' },
            '<0.6'
        );

        return tl;
    }

    setupWideCharaAnimation() {
        this.wideCharaTl = gsap.timeline({ paused: true });
        this.wideCharaTl.to('.js-chara-container', { duration: 15, ease: 'power3.out', y: 500 });
    }

    animeCharaSprite(self) {
        if (self.progress > 0) {
            this.charas.forEach((el) => {
                el.classList.remove('-stop');
            });
        }
    }

    stopCharaSprite() {
        clearTimeout(this.scrollEndTimer);
        this.scrollEndTimer = setTimeout(() => {
            this.charas.forEach((chara) => {
                chara.classList.add('-stop');
            });
        }, 100);
    }

    animePageTop(self) {
        // gsap.to('.js-pagetop-chara', { y: this.pageTopCharaY * (1 - self.progress) * -1 });

        const target = document.querySelector('.js-pagetop-chara');
        const rect = target.getBoundingClientRect();
        const targetTop = rect.top;
        const targetLeft = rect.left;
        const targetH = rect.height;
        const distanceToTop = targetTop + window.scrollY;

        gsap.set(target, { top: `${targetTop}px` });
        gsap.set(target, { left: `${targetLeft}px` });

        target.classList.add('-move');

        const tl = gsap.timeline();

        tl
            // .to(target, {
            //     y: 20,
            //     duration: 0.5,
            //     ease: 'power3.out',
            // })
            .to(window, { duration: 1.8, scrollTo: { y: 0 }, ease: 'circ.inOut' }, '>')
            .from(
                target,
                {
                    y: (targetTop + targetH) * -1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: target,
                        start: 0,
                        end: `-=${distanceToTop * -1}`,
                        scrub: true,
                        once: true,
                        onToggle: (self) => {
                            if (self.isActive === false) {
                                gsap.set(target, { top: 0 });
                                gsap.set(target, { left: 0 });
                                gsap.set(target, { y: 0 });
                                target.classList.remove('-move');
                                document.querySelectorAll('.js-pagetop')[0].classList.remove('-move');
                                this.onPageTopFlg = false;
                                self.kill();
                                tl.kill();
                            }
                        },
                    },
                },
                '<'
            );
    }
}
