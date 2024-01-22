import { THEMES_ANIMALS, THEMES_SPORTS, THEMES_FOOD } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class ThemesView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'themesController';

        this.title = p(this.elementContainer, { className: 'game_title', innerHTML: 'Select a themes:' });

        this.facesBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'ANIMALS', onclick: this.OnAnimalsBtn.bind(this) });

        this.foodBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'FOOD', onclick: this.OnFoodBtn.bind(this) });

        this.flagsBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'SPORTS', onclick: this.OnSportsBtn.bind(this) });

        this.setStartPosition();
        this.moveIn();
    }

    OnAnimalsBtn() {
        window.localStorage.setItem('theme', THEMES_ANIMALS);
    }

    OnFoodBtn() {
        window.localStorage.setItem('theme', THEMES_FOOD);
    }

    OnSportsBtn() {
        window.localStorage.setItem('theme', THEMES_SPORTS);
    }
}
