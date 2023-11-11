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
            this.controller.receiveCards(data.cards);
        }
        //no esta mandando el send
        request.send();
    }
}