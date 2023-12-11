import { ScoresServices } from "../../services/scoreServices/scoreServices.js";
import { Controller } from "../controller.js";
import { ScoreView } from "./scoreView.js";

export class ScoreController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ScoreView(this, parent);
        this.service = new ScoresServices(this);
        this.service.getScores(this.appManager.getBaseURL());
    }

    receiveScores(scores) {
        this.scores = scores;
        this.view.showScores(this.scores);
    }
}