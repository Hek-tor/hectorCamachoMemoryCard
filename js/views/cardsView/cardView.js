import { View } from "../view.js";

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView';
        this.container.onclick = this.onCardSelected.bind(this);
    }

    onCardSelected() {
        const onCardSelectedEvent = new CustomEvent("onCardSelected", {
            bubbles: true,
            detail: { cardView: this },
        });
        this.container.dispatchEvent(onCardSelectedEvent);
    }

    showIcon() {
        this.container.classList.add('cardView_show');
        this.container.innerHTML = this.card.icon;
    }

    discovered() {
        this.container.classList.remove('cardView_show');
        this.container.classList.add('cardView_discovered');
    }

    hideIcon() {
        this.container.innerHTML = '';
        this.container.classList.remove('cardView_show');
        this.container.classList.remove('cardView_discovered');
    }
}