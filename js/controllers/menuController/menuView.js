import { LOGIN } from "../../libs/constants.js";
import { newElementDiv } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.loginBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'LOGIN', onclick: this.OnLoginBtn.bind(this) });

        this.OnPlayBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'PLAY', onclick: this.OnPlayBtn.bind(this) });

        this.OnScoresBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'SCORE', onclick: this.OnScoresBtn.bind(this) });

        this.OnDifficultyBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'DIFFICULTY', onclick: this.OnDifficultyBtn.bind(this) });

        this.OnThemesBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'THEMES', onclick: this.OnThemesBtn.bind(this) });

        this.OnCreditsBtn
            = newElementDiv(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'CREDITS', onclick: this.OnCreditsBtn.bind(this) });
    }

    OnLoginBtn() {
        this.controller.appManager.showController(LOGIN);
    }

    OnPlayBtn() { }

    OnScoresBtn() { }

    OnDifficultyBtn() { }

    OnThemesBtn() { }

    OnCreditsBtn() { }
}
