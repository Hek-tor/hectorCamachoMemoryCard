import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new PlayView(this, parent);
    }
}