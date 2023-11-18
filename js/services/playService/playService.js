import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards() {
        let request = new XMLHttpRequest();
        request.open('GET', './js/services/playService/cards.json');
        request.onload = () => {
            let data = JSON.parse(request.response);
            let cards = [];
            data.cards.forEach((cardData, i) => {
                let card = new Card(i, cardData.id, cardData.icon)
                cards.push(card);
            });
            console.log(cards)
            this.controller.receiveCards(cards);
        }
        request.send();
    }
}