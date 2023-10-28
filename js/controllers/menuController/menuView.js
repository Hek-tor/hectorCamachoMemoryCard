import { ViewForController } from "../../views/viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';
    }
}