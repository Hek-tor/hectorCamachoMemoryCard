import { div } from "../../libs/html.js";
import { ViewForController } from "../../views/viewForController.js";

export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.loginBtn
            = div(this.elementContainer,
                { className: 'gameBtn', innerHTML: 'LOGIN', onclick: this.OnLoginBtn.bind(this) });
        this.setStartPosition();
        this.moveIn();
    }

    OnLoginBtn() { }
}
