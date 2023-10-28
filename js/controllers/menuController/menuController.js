import { Controller } from "../controller.js";
import { MenuView } from "./menuView.js";

export class MenuController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new MenuView(this, parent);
        this.view.container.className = 'menuController';
    }
}