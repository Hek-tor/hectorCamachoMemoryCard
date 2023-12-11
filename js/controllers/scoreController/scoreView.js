import { div, p } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";
import { ScoreCards } from "../../views/scoresView/scoresView.js";

export class ScoreView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'scoreController';

        this.title = p(this.elementContainer, { className: 'topScores', innerHTML: 'Top BrainMe`s' });
        this.scoresContainer = div(this.elementContainer, { className: 'scoresContainer' });
        this.scoresContainer.scrollIntoView();
        this.setStartPosition();
        this.moveIn();
    }

    showScores(scores) {
        scores.forEach(score => {
            let scoreCard = new ScoreCards(this.scoresContainer, score);
        });
    }
}
