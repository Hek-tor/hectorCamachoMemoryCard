import { View } from "../view.js";
import { p } from "../../libs/html.js";

export class ScoreCards extends View {
    constructor(parent, score) {
        super(parent);
        this.score = score;
        this.container.className = 'scoreView';

        this.difficulty = this.getDifficulty(this.score.difficulty);
        this.nickname = p(this.container, { className: 'userScoreData', innerHTML: `Player: ${score.username}` });
        this.gameMode = p(this.container, { className: 'userScoreData', innerHTML: `Game mode: ${this.difficulty}` });
        this.totalClicks = p(this.container, { className: 'userScoreData', innerHTML: `Total clicks: ${score.clicks}` });
        this.totalTime = p(this.container, { className: 'userScoreData', innerHTML: `Time: ${score.time}s` });
        this.gameScore = p(this.container, { className: 'userScoreData', innerHTML: `<b>Score: ${score.score}</b>` });
    }

    getDifficulty(difficulty) {
        switch (difficulty) {
            case '6':
                return 'Low'
            case '8':
                return 'Normal'
            case '10':
                return 'High'
        };
    }
}