import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards() {
        return [new Card(1, '❤️️'), new Card(2, '😂')];
    }
}