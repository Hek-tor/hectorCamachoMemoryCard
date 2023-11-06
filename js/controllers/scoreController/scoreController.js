import { Controller } from "../controller.js";
import { ScoreView } from "./scoreView.js";

export class ScoreController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ScoreView(this, parent);
    }
}