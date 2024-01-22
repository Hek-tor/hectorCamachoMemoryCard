import { Controller } from "../controller.js";
import { DifficultyView } from "./difficultyView.js";

export class DifficultyController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new DifficultyView(this, parent);
    }
}