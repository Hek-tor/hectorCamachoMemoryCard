import { Controller } from "../controller.js";
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new CreditsView(this, parent);
    }
}