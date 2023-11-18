import { div, p } from "../../libs/html.js";
import { Card } from "../../models/card.js";
import { CardView } from "../../views/cardsView/cardView.js";
import { ViewForController } from "../../views/viewForController.js";

export class PlayView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playController';

        let hubContainer = div(this.elementContainer, { className: 'playController_hudContainer' });
        let labelsContainer = div(hubContainer, { className: 'playController_labelContainer' });
        this.clicksLbl = p(labelsContainer, { className: 'playController_clicksLbl' });
        this.timeLbl = p(labelsContainer, { className: 'playController_timeLbl' })
        this.resetBtn = div(hubContainer, {
            className: 'gameBtn playController_gameBtn',
            innerHTML: 'RESET',
            onclick: this.onResetBtn.bind(this)
        });

        this.cardsContainer = div(this.elementContainer, { className: 'playController_cardsContainer' });

        this.setStartPosition();
        this.moveIn();
    }

    onResetBtn() {
        const onResetBtnEvent = new CustomEvent("onResetBtnEvent", {
            bubbles: true,
            detail: null,
        });
        this.container.dispatchEvent(onResetBtnEvent);
    }

    updateHUD(clicks, time) {
        this.clicksLbl.innerHTML = `CLICKS: ${clicks}`;
        this.timeLbl.innerHTML = `TIME: ${time}`;
    }

    showCards(cards) {
        cards.forEach(card => {
            let cardView = new CardView(this.cardsContainer, card)
        })
    }

    removeCards() {
        this.cardsContainer.innerHTML = '';
    }
}
