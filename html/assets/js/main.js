!function(){"use strict";var t,e={495:function(t,e,o){var a=o(358),i=o(92),r=o(127);a.p8.registerPlugin(i.i,r.L);class n{constructor(){this.scrollEndTimer,this.onPageTopFlg=!1,this.enemyTimelines=[],this.init()}init(){this.setupAnimations(),this.setupScrollTriggers(),this.setupPageTop()}setupAnimations(){this.animations={mvTop:this.createMvTopAnimation(),aboutCatch:this.createAboutCatchAnimation(),keywords:this.createKeywordsAnimations(),mvBottom:this.createMvBottomAnimation()}}setupScrollTriggers(){i.i.create({trigger:".mv.-top",start:"top center",onEnter:()=>this.animations.mvTop.play()}),i.i.create({trigger:".about__catch",start:"top 90%",onEnter:()=>this.animations.aboutCatch.play()}),this.animations.keywords.forEach((({trigger:t,animation:e})=>{i.i.create({trigger:t,start:"top 90%",onEnter:()=>e.play()})})),i.i.create({trigger:".mv.-bottom",start:"top center",onEnter:()=>this.animations.mvBottom.play()});const t=document.querySelector(".wrapper");i.i.create({trigger:".about",start:"top center",onEnter:()=>t.classList.add("-scrolled"),onLeaveBack:()=>t.classList.remove("-scrolled")}),i.i.create({trigger:".wrapper",start:"top top",onUpdate:t=>{this.handleScrollingClass(t)}}),document.querySelectorAll(".js-enemy-chara").forEach(((t,e)=>{const o=this.createIndividualEnemyAnimation(t,e);this.enemyTimelines.push(o),i.i.create({trigger:".js-enemies-anime",start:"top bottom",onEnter:()=>o.play(),onEnterBack:()=>o.play(),onLeave:()=>o.pause(),onLeaveBack:()=>o.pause()})}))}setupPageTop(){document.querySelectorAll(".js-pagetop").forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),this.onPageTopFlg=!0,t.classList.add("-move"),this.animePageTop()}))}))}createMvTopAnimation(){a.p8.set(".mv.-top .mv__maincatch",{opacity:0,scale:1.3}),a.p8.set(".mv.-top .mv__logo",{opacity:0,scale:1.5,rotation:-360}),a.p8.set(".mv.-top .mv__chara.-sally, .mv.-top .mv__chara.-brown",{opacity:0,y:"20%"}),a.p8.set(".mv.-top .mv__chara.-sally",{x:"-10%"}),a.p8.set(".mv.-top .mv__chara.-brown",{x:"10%"}),a.p8.set(".mv.-top .mv__dl,.mv.-top .mv__links",{opacity:0,y:20});const t=a.p8.timeline({paused:!0});return t.to(".mv.-top .mv__maincatch",{duration:.6,opacity:1,scale:1,ease:"elastic.out(1,0.3)"},.2).to(".mv.-top .mv__maincatch",{duration:.05,x:"-5%",repeat:9,yoyo:!0,ease:"power1.in"},"<").to(".mv.-top .mv__logo",{duration:1.5,opacity:1,scale:1,rotation:0,ease:"elastic.out(1,0.3)"},"<0.5").to(".mv.-top .mv__chara",{duration:.6,stagger:.2,opacity:1,x:0,y:0,ease:"power2.out"},"<1.0").to(".mv.-top .mv__dl,.mv.-top .mv__links",{duration:.6,opacity:1,y:0,ease:"power2.out"},"<0.6"),t}createAboutCatchAnimation(){a.p8.set(".about__catch",{opacity:0,scale:.5}),a.p8.set(".about__catch__slime",{opacity:0,scale:1}),a.p8.set(".about__catch__slime.-slime1",{x:"250%",y:"250%",rotate:2520}),a.p8.set(".about__catch__slime.-slime2",{x:"-150%",y:"200%",rotate:-1440}),a.p8.set(".about__catch__slime.-slime3",{x:"-270%",y:"0%",rotate:2160}),a.p8.set(".about__catch__slime.-slime4",{x:"220%",y:"-130%",rotate:1800}),a.p8.set(".about__catch__slime.-slime5",{x:"-100%",y:"-280%",rotate:-1440}),a.p8.set(".about__catch__slime.-slime6",{x:"-120%",y:"-130%",rotate:2520});const t=a.p8.timeline({paused:!0});return t.to(".about__catch__slime",{duration:1,opacity:1,scale:1,rotate:0,x:0,y:0,stagger:.05,ease:"circ.out"},0).to(".about__catch",{duration:.8,opacity:1,scale:1,ease:"bounce.out"},"<"),t}createKeywordsAnimations(){return a.p8.set(".keywords__cont__item__ttl .ttltxt",{opacity:0,scale:1.3}),a.p8.set(".keywords__cont__item__movie",{opacity:0,scale:0,rotate:30}),a.p8.set(".keywords__cont__item__catch img",{clipPath:"inset(0 100% 0 0)"}),[...document.querySelectorAll(".keywords__cont__item")].map((t=>{const e=a.p8.timeline({paused:!0}),o=t.querySelector(".ttltxt"),i=t.querySelector(".keywords__cont__item__movie"),r=t.querySelector(".keywords__cont__item__catch img");return e.to(o,{duration:.6,opacity:1,scale:1,ease:"elastic.out(1,0.3)"},.2).to(o,{duration:.05,x:"-5%",repeat:9,yoyo:!0,ease:"power1.in"},"<").to(i,{duration:1,opacity:1,scale:1,rotate:0,ease:"back.inOut"},"<0.2").to(r,{duration:.8,clipPath:"inset(0 0% 0 0)",ease:"power2.inOut"},"<0.6"),{trigger:t,animation:e}}))}createMvBottomAnimation(){a.p8.set(".mv.-bottom .mv__logo",{opacity:0,scale:1.5,rotation:-360}),a.p8.set(".mv.-bottom .mv__dl,.mv.-bottom .mv__links",{opacity:0,y:20});const t=a.p8.timeline({paused:!0});return t.to(".mv.-bottom .mv__logo",{duration:1.5,opacity:1,scale:1,rotation:0,ease:"elastic.out(1,0.3)"},.2).to(".mv.-bottom .mv__dl,.mv.-bottom .mv__links",{duration:.6,opacity:1,y:0,ease:"power2.out"},"<0.6"),t}createIndividualEnemyAnimation(t,e){const o=document.querySelector(".js-enemies").getBoundingClientRect().width,i=a.p8.timeline({paused:!0,onComplete:()=>{i.restart()}});return i.to(t,{x:o,duration:a.p8.utils.random(4,6),ease:"power1.in",delay:.5*e+a.p8.utils.random(-.3,.3)}).to(t,{opacity:0,duration:.3},">"),i}handleScrollingClass(t){const e=document.querySelector(".wrapper");0===t.direction||e.classList.contains("-scrolling")||e.classList.add("-scrolling"),clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout((()=>{e.classList.remove("-scrolling")}),200)}animePageTop(){const t=document.querySelector(".js-pagetop-chara"),e=t.getBoundingClientRect(),o=e.top,i=e.left,r=e.height;a.p8.set(t,{top:`${o}px`,left:`${i}px`,transformOrigin:"50% 50%",rotation:0}),t.classList.add("-move");const n=a.p8.timeline();n.to(".js-pagetop-shadow",{opacity:0,duration:.2}).to(t,{y:40,scaleY:.96,scaleX:1.12,duration:.4,ease:"power3.out"}).to(t,{scaleY:1,scaleX:1,duration:.2,ease:"power4.out"},">").to(window,{duration:1.8,scrollTo:{y:0},ease:"circ.inOut"},"<").to(t,{y:-1*(o+r),duration:2.8,rotation:3600,ease:"power3.inOut",onComplete:()=>{a.p8.set(t,{top:0}),a.p8.set(t,{left:0}),a.p8.set(t,{y:0}),a.p8.set(".js-pagetop-shadow",{opacity:1}),t.classList.remove("-move"),document.querySelector(".js-pagetop").classList.remove("-move"),this.onPageTopFlg=!1,n.kill()}},"<")}}class s{constructor(){this.init()}init(){this.eventBind()}resetEvent(){this.eventBind("reset")}eventBind(t){const e=[...document.querySelectorAll(".js-modal_open")],o=[...document.querySelectorAll(".js-modal_close")],a=[...document.querySelectorAll(".js-modal")],i=t=>{t.preventDefault();const e=t.currentTarget.getAttribute("data-modalID"),o=document.querySelector(`.js-modal[data-modalID=${e}]`);document.body.classList.add("-lock"),o&&o.classList.add("-active")},r=t=>{document.body.classList.remove("-lock"),a.forEach((t=>t.classList.remove("-active")))};e.forEach((e=>{t&&e.removeEventListener("click",i),e.addEventListener("click",i)})),o.forEach((e=>{t&&e.removeEventListener("click",r),e.addEventListener("click",r)}))}}class c{constructor(){this.player=null,this.init()}init(){null!==document.querySelector(".js-moviemodal_btn")&&(this.setup(),this.eventBind())}resetEvent(){this.eventBind("reset")}setup(){const t=document.createElement("script"),e=document.querySelectorAll(".js-moviemodal_btn")[0].getAttribute("data-videoID");t.src="https://www.youtube.com/iframe_api";const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o),window.onYouTubeIframeAPIReady=()=>{this.player=new YT.Player("player",{height:"360",width:"640",videoId:e,events:{onStateChange:this.onStateChange.bind(this),onError:this.onError}})}}onError(t){console.log(t)}onStateChange(t){3===t.data&&setTimeout((()=>{document.querySelector(".c-modal_movie__iframewrap").style.opacity=1}),200)}eventBind(t){const e=[...document.querySelectorAll(".js-modal_open")],o=[...document.querySelectorAll(".js-modal_close")],a=document.querySelector(".c-modal_movie__iframewrap"),i=()=>{this.player.stopVideo(),a.style.opacity=0},r=t=>{const e=t.currentTarget.getAttribute("data-videoID");this.loadVideo(e)};e.forEach((e=>{t&&e.removeEventListener("click",r),e.addEventListener("click",r)})),o.forEach((e=>{t&&e.removeEventListener("click",i),e.addEventListener("click",i)}))}loadVideo(t){this.player.loadVideoById({videoId:t})}}class l{constructor(){}init(){}}(()=>{new n,new s,new c;const t=new l;window.addEventListener("load",(function(){t.init()}))})()}},o={};function a(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.m=e,t=[],a.O=function(e,o,i,r){if(!o){var n=1/0;for(m=0;m<t.length;m++){o=t[m][0],i=t[m][1],r=t[m][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[c])}))?o.splice(c--,1):(s=!1,r<n&&(n=r));if(s){t.splice(m--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var m=t.length;m>0&&t[m-1][2]>r;m--)t[m]=t[m-1];t[m]=[o,i,r]},a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,n=o[0],s=o[1],c=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var m=c(a)}for(e&&e(o);l<n.length;l++)r=n[l],a.o(t,r)&&t[r]&&t[r][0](),t[n[l]]=0;return a.O(m)},o=self.webpackChunkbuild=self.webpackChunkbuild||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var i=a.O(void 0,[736],(function(){return a(495)}));i=a.O(i)}();
//# sourceMappingURL=maps/main.js.map