import { View } from "../../views/view.js";
import { Controller } from "../controller.js";

export class NavbarController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className = 'navbarController';
    }
}