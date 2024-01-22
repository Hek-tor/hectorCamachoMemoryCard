import { Score } from "../../models/scores.js";
import { Service } from "../service.js";

export class ScoresServices extends Service {
    constructor(controller) {
        super(controller);
    }

    getScores(baseURL) {
        let url = `${baseURL}scores`;
        fetch(url).then(response => {
            response.json().then(data => {
                let scores = [];
                data.forEach((scoreData, i) => {
                    let score = new Score(scoreData.clicks, scoreData.difficulty, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                });
                this.controller.receiveScores(scores);
            }).catch(error => {
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        });
    };
}