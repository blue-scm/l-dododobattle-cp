import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class ScrollEffect {
    constructor() {
        this.scrollEndTimer;
        this.onPageTopFlg = false;
        this.enemyTimelines = [];
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupScrollTriggers();
        this.setupPageTop();
        this.setupResizeListener();
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
                this.handleScrollingClass(self);
            },
        });

        const enemies = document.querySelectorAll('.js-enemy-chara');
        enemies.forEach((enemy, idx) => {
            const tl = this.createIndividualEnemyAnimation(enemy, idx);
            this.enemyTimelines.push(tl); // 各タイムラインを配列に追加

            ScrollTrigger.create({
                trigger: '.js-enemies-anime',
                start: 'top bottom',
                onEnter: () => tl.play(),
                onEnterBack: () => tl.play(),
                onLeave: () => tl.pause(),
                onLeaveBack: () => tl.pause(),
            });
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
            const video = keyword.querySelector('video');

            tl.call(
                () => {
                    video.play();
                },
                null,
                null,
                0.1
            )
                .to(ttltxt, { duration: 0.6, opacity: 1, scale: 1, ease: 'elastic.out(1,0.3)' }, '<')
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

    createIndividualEnemyAnimation(enemy, idx) {
        const enemyAreaW = document.querySelector('.js-enemies').getBoundingClientRect().width;
        const tl = gsap.timeline({
            paused: true,
            onComplete: () => {
                tl.restart();
            },
        });
        tl.to(enemy, {
            x: enemyAreaW,
            duration: gsap.utils.random(4, 6),
            ease: 'power1.in',
            delay: idx * 0.5 + gsap.utils.random(-0.3, 0.3),
        }).to(
            enemy,
            {
                opacity: 0,
                duration: 0.3,
            },
            '>'
        );
        return tl;
    }

    handleScrollingClass(self) {
        const wrapper = document.querySelector('.wrapper');
        if (self.direction !== 0 && !wrapper.classList.contains('-scrolling')) {
            wrapper.classList.add('-scrolling');
        }

        clearTimeout(this.scrollEndTimer);
        this.scrollEndTimer = setTimeout(() => {
            wrapper.classList.remove('-scrolling');
        }, 200);
    }

    animePageTop() {
        const target = document.querySelector('.js-pagetop-chara');
        const rect = target.getBoundingClientRect();
        const targetTop = rect.top;
        const targetLeft = rect.left;
        const targetH = rect.height;

        gsap.set(target, { top: `${targetTop}px`, left: `${targetLeft}px`, transformOrigin: '50% 50%', rotation: 0 });
        target.classList.add('-move');

        const tl = gsap.timeline();

        tl.to('.js-pagetop-shadow', {
            opacity: 0,
            duration: 0.2,
        })
            .to(target, {
                y: 40,
                scaleY: 0.96,
                scaleX: 1.12,
                duration: 0.4,
                ease: 'power3.out',
            })
            .to(
                target,
                {
                    scaleY: 1,
                    scaleX: 1,
                    duration: 0.2,
                    ease: 'power4.out',
                },
                '>'
            )
            .to(window, { duration: 1.8, scrollTo: { y: 0 }, ease: 'circ.inOut' }, '<')
            .to(
                target,
                {
                    y: (targetTop + targetH) * -1,
                    duration: 2.8,
                    rotation: 360 * 10,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        gsap.set(target, { top: 0 });
                        gsap.set(target, { left: 0 });
                        gsap.set(target, { y: 0 });
                        gsap.set('.js-pagetop-shadow', { opacity: 1 });
                        target.classList.remove('-move');
                        document.querySelector('.js-pagetop').classList.remove('-move');
                        this.onPageTopFlg = false;
                        tl.kill();
                    },
                },
                '<'
            );
    }

    setupResizeListener() {
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    }
}
