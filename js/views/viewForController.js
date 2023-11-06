import { newElementDiv } from "../libs/html.js";
import { View } from "./view.js";

export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.fade = newElementDiv(this.container, { className: 'fade' });
        this.elementContainer = newElementDiv(this.container, { className: 'elementContainer' });
    }

    setStartPosition() {
        this.elementContainer.style.transform = `translateX(${window.innerWidth}px)`;
    }

    moveIn() {
        gsap.to(this.elementContainer, { x: 0, ease: "slow(0.7,0.7,false)", });
        gsap.to(this.fade, { opacity: 1 });
    }

    moveOut() {
        gsap.to(this.elementContainer,
            { x: window.innerWidth, ease: "slow(0.7,0.7,false)", onComplete: this.moveOutCompleted.bind(this) });
        gsap.to(this.fade, { opacity: 0, duration: 0.5, ease: "power1.in"});
    }

    moveOutCompleted() {
        this.delete();
    }
}