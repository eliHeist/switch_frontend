import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'


gsap.registerPlugin(ScrollTrigger);


export function observeText(start: string = 'top 80%', end: string = 'top 20%') {
    const split_types = document.querySelectorAll('.reveal-type') as NodeList

    split_types.forEach((char:any,i:any) => {
        const text = new SplitType(char, { types: 'chars,words' })

        gsap.from(text.words, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: 0,
            y: -50,
            // scaleY: .5,
            rotateX: '90deg',
            transformOrigin: 'top',
            stagger: 0.1,
            ease: "power1.out"
        })
    })
}

export function slideIn() {
    const slider_parents = document.querySelectorAll('.slide-in-parent') as any
    
    slider_parents.forEach((slider_parent:HTMLElement) => {
        const sliders = slider_parent.querySelectorAll('.slide-in') as NodeListOf<HTMLElement>

        gsap.from(sliders, {
            scrollTrigger: {
                trigger: slider_parent,
                toggleActions: 'play play reverse reverse',
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
                markers: false
            },
            opacity: 0,
            top: 200,
            duration: 1,
            stagger: 0.5,
            ease: "power1.out"
        })
    })
}

export function fadeIn() {
    const faders = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>

    faders.forEach((fader:HTMLElement) => {
        gsap.from(fader, {
            scrollTrigger: {
                trigger: fader,
                toggleActions: 'play play reverse reverse',
                start: 'top 80%',
                end: 'top center',
                scrub: true,
                markers: false
            },
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power1.out"
        })
    })
}
