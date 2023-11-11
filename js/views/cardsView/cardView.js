import { View } from "../view.js";

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView';
        this.container.innerHTML = this.card.icon;
    }
}