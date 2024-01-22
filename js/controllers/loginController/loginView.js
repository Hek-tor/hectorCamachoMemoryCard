import { div, input, p, SwalLogin } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.controller = controller;
        this.container.className = 'loginController';

        this.title = p(this.elementContainer, { className: 'game_title', innerHTML: 'Enter your name:' });
        this.usernameIn = input(this.elementContainer, { className: 'loginController_input' });
        this.loginBtn = div(this.elementContainer, { className: 'gameBtn', innerHTML: 'LOGIN', onclick: this.OnLoginBtn.bind(this) });

        this.setStartPosition();
        this.moveIn();
    }

    OnLoginBtn() {
        let username = this.usernameIn.value;
        if (username !== '') {
            window.localStorage.setItem('username', username);
            SwalLogin('Welcome to BrainMe ', username, 'Enjoy the game');
            this.controller.successLogin();
        }
    }
}
