import { div } from "../libs/html.js ";

export class View {
    constructor(parent) {
        this.parent = parent;
        this.container = div(parent, null);
    }

    delete() {
        this.parent.removeChild(this.container);
    }
}