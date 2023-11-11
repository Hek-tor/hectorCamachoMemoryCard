import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class ScoreView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'scoreController';

        this.loginBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'SCORES', onclick: this.OnScoreBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnScoreBtn() { }
}
