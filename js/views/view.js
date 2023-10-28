import { newElementDiv } from "../libs/html.js ";

export class View {
    constructor(parent) {
        this.parent = parent;
        this.container = newElementDiv(parent, null);
    }
}