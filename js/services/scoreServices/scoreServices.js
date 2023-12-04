import { Score } from "../../models/scores.js";
import { Service } from "../service.js";

export class ScoresServices extends Service {
    constructor(controller) {
        super(controller);
    }

    getScores() {
        let url = `https://memory-game-backend-five.vercel.app/scores`;
        // let url = `http://localhost:3000/scores`;

        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                let data = JSON.parse(request.response);
                let scores = [];
                data.forEach((scoreData, i) => {
                    let score = new Score(scoreData.clicks, scoreData.difficulty, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                })
            } else {
                console.warn('Error en la solicitud. Estado:', request.status);
            }
        };
        request.send();
    };
}