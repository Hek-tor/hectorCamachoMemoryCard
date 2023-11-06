import { Controller } from "../controller.js";
import { ThemesView } from "./themesView.js";

export class ThemesController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ThemesView(this, parent);
    }
}