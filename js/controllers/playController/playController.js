import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";
import { PlayService } from "../../services/playService/playService.js";

export class PlayController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.service = new PlayService(this);
        this.view = new PlayView(this, parent);
        this.view.updateHUD(0, 0);

        this.cards = this.service.getCards();
        this.view.showCards(this.cards);
    }
}