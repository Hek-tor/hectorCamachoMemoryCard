import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards(difficulty, theme, baseURL) {
        let url = `${baseURL}cards/${difficulty}/${theme}`;

        fetch(url).then(response => {
            response.json().then(data => {
                let cards = [];
                data.cards.forEach((cardData, i) => {
                    let card = new Card(i, cardData.id, cardData.icon)
                    cards.push(card);
                });
                this.controller.receiveCards(cards);
            })
        }).catch(error => {
            console.log('Parsing json:', error);
        });
    }

    sendScores(score, baseURL) {
        let url = `${baseURL}score`;
        let params = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(score),
        };

        fetch(url, params).then(response => {
            response.json()
                .catch(error => {
                    console.log(error);
                });
        }).catch(err => {
            console.log(err);
        });
    }
}