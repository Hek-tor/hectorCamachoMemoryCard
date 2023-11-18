import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class DifficultyView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);

        this.container.className = 'difficultyController';
        this.title = p(this.elementContainer, { className: 'game_title', innerHTML: 'Select a difficulty:' });
        
        this.lowBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'LOW', onclick: this.OnLowBtn.bind(this) });

        this.medBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'MEDIUM', onclick: this.OnMediumBtn.bind(this) });
        
        this.highBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'HIGH', onclick: this.OnHighBtn.bind(this) });

        this.setStartPosition();
        this.moveIn();
    }

    OnLowBtn() {
        window.localStorage.setItem('difficulty', DIFFICULTY_LOW);
    }

    OnMediumBtn() {
        window.localStorage.setItem('difficulty', DIFFICULTY_MEDIUM);
    }

    OnHighBtn() {
        window.localStorage.setItem('difficulty', DIFFICULTY_HIGH);
    }
}
