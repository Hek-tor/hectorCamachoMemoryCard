import { newElementDiv } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playController';

        this.loginBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'PLAY', onclick: this.OnPlayBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnPlayBtn() { }
}
