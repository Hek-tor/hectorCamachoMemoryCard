import { newElementDiv } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class ThemesView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'themesController';

        this.loginBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'THEMES', onclick: this.OnThemesBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnThemesBtn() { }
}
