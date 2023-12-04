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
                let dataScore = JSON.parse(request.response);
            } else {
                console.warn('Error en la solicitud. Estado:', request.status);
            }
        };
        request.send();
    };
}