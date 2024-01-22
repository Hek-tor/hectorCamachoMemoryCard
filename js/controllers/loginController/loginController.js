import { MENU } from "../../libs/constants.js";
import { Controller } from "../controller.js";
import { LoginView } from "./loginView.js";

export class LoginController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new LoginView(this, parent);
    }

    successLogin() {
        this.appManager.showController(MENU);
    }
}