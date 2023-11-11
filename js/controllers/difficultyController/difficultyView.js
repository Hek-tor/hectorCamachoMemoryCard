import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class DifficultyView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'difficultyController';

        this.loginBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'DIFFICULTY', onclick: this.OnDifficultyBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnDifficultyBtn() { }
}
