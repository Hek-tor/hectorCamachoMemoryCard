import { newElementDiv } from "../libs/html.js";
import { View } from "./view.js";

export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.fade = newElementDiv(this.container, { className: 'fade' });
        this.elementContainer = newElementDiv(this.container, { className: 'elementContainer' });
    }
}