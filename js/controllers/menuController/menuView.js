import { CREDITS, DIFFICULTY, LOGIN, PLAY, SCORES, THEMES } from "../../libs/constants.js";
import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuController';

        this.loginBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'LOGIN', onclick: this.OnLoginBtn.bind(this) });

        this.OnPlayBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'PLAY', onclick: this.OnPlayBtn.bind(this) });

        this.OnScoresBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'SCORE', onclick: this.OnScoresBtn.bind(this) });

        this.OnDifficultyBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'DIFFICULTY', onclick: this.OnDifficultyBtn.bind(this) });

        this.OnThemesBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'THEMES', onclick: this.OnThemesBtn.bind(this) });

        this.OnCreditsBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'CREDITS', onclick: this.OnCreditsBtn.bind(this) });
    }

    OnLoginBtn() {
        this.controller.appManager.showController(LOGIN);
    }

    OnPlayBtn() {
        this.controller.appManager.showController(PLAY);
    }

    OnScoresBtn() {
        this.controller.appManager.showController(SCORES);
    }

    OnDifficultyBtn() {
        this.controller.appManager.showController(DIFFICULTY);
    }

    OnThemesBtn() {
        this.controller.appManager.showController(THEMES);
    }

    OnCreditsBtn() {
        this.controller.appManager.showController(CREDITS);
    }
}
