import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";
import { PlayService } from "../../services/playService/playService.js";

export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.service = new PlayService(this);
        this.view = new PlayView(this, parent);
        this.service.getCards();

        this.view.container.addEventListener('onCardSelected', this.onCardSelected.bind(this));

        this.cardView1 = null;
        this.cardView2 = null;
        this.showingTimer = null;
        this.playingTimer = null;
        this.clicksCounter = 0;
        this.timeCounter = 0;
        this.updateHUD();

        this.playingTimer = setInterval(this.updateTimeCounter.bind(this), 1000);
    }

    receiveCards(cards) {
        this.cards = cards;
        this.view.showCards(this.cards);
    }

    onCardSelected(event) {
        if (this.cardView1 !== null && this.cardView2 !== null) return;

        let cardView = event.detail.cardView;
        if (this.cardView1 === null) {
            this.cardView1 = cardView;
            this.cardView1.showIcon();
            this.clicksCounter += 1;
            this.updateHUD();
        } else if (this.cardView2 === null && this.cardView1.card.identifier !== cardView.card.identifier) {
            this.cardView2 = cardView;
            this.cardView2.showIcon();
            this.clicksCounter += 1;
            this.updateHUD();
        } else {
            return;
        }

        if (this.cardView1 !== null && this.cardView2 !== null) {
            this.checkCardViews();
        }
    }

    checkCardViews() {
        if (this.cardView1.card.id === this.cardView2.card.id) {
            this.cardView1.discovered();
            this.cardView2.discovered();
            this.clearCardsViews();
        } else {
            this.showingTimer = window.setTimeout
                (this.hideCardsWhenNotEquals.bind(this), 1000)
        }
    }

    hideCardsWhenNotEquals() {
        window.clearTimeout(this.showingTimer);
        this.showingTimer = null;
        this.cardView1.hideIcon();
        this.cardView2.hideIcon();
        this.clearCardsViews();
    }

    clearCardsViews() {
        this.cardView1 = null;
        this.cardView2 = null;
    }

    updateHUD() {
        this.view.updateHUD(this.clicksCounter, this.timeCounter);
    }

    updateTimeCounter() {
        this.timeCounter += 1;
        this.updateHUD();
    }
}