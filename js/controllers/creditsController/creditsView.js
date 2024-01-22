import { div, p, img } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class CreditsView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'creditsController';

        this.creditsContent = div(this.elementContainer, { className: 'creditsContent' });
        this.title = p(this.creditsContent, { className: 'game_title', innerHTML: 'Créditos' });
        this.aboutMe = p(this.creditsContent, {
            className: 'aboutMe', innerHTML: `Hola soy Héctor, creador de este minijuego llamado BrainMe. 
            Este proyecto tiene como fin crear un juego educativo para cualquier persona que desee disfrutarlo.
            Esto mientras aplico mis conocimientos en desarrallo web. Este proyecto full stack está creado con Javascript y con tecnologías como Node, Express y Firebase.` });

        this.contactInformation = div(this.elementContainer, { className: 'contactInformation' });

        this.gitHub = img(this.contactInformation, { className: 'socialMedia', onclick: this.btnGitHub.bind(this) });
        this.linkedIn = img(this.contactInformation, { className: 'socialMedia', onclick: this.btnLinkendIn.bind(this) });
        this.behance = img(this.contactInformation, { className: 'socialMedia', onclick: this.btnBehance.bind(this) });

        this.gitHub.src = '../assets/images/github.png';
        this.linkedIn.src = '../assets/images/linkedIn.png';
        this.behance.src = '../assets/images/behance.png';

        this.setStartPosition();
        this.moveIn();
    }

    btnGitHub() {
        window.open("https://github.com/Hek-tor", "_blank");
    }

    btnLinkendIn() {
        window.open("https://www.linkedin.com/in/hectoremcd/", "_blank");
    }

    btnBehance() {
        window.open("https://www.behance.net/hectorcamachod", "_blank");
    }
}
