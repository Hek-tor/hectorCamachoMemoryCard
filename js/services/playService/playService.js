import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards(difficulty, theme, baseURL) {
        let url = `${baseURL}cards/${difficulty}/${theme}`;
        console.log(url)
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            let data = JSON.parse(request.response);
            let cards = [];
            data.cards.forEach((cardData, i) => {
                let card = new Card(i, cardData.id, cardData.icon)
                cards.push(card);
            });
            this.controller.receiveCards(cards);
        }
        request.send();
    }

    sendScores(score) {
        let url = `https://memory-game-backend-five.vercel.app/scores`;
    }
}