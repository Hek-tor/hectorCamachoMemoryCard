import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class CreditsView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'creditsController';

        this.loginBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'CREDITS', onclick: this.OnCreditsBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnCreditsBtn() { }
}
