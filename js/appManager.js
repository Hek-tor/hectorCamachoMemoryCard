/**
* @name appManager
* @file Manage the app.
* @author Hector Emilio hectoremdz@gmail.com
*/

import { LoginController } from "./controllers/loginController/loginController.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController.js";
import { CREDITS, DIFFICULTY, LOGIN, MENU, NONE, PLAY, SCORES, THEMES } from "./libs/constants.js";
import { newElementDiv } from "./libs/html.js";

export class AppManager {
    constructor() {
        this.mainContainer =
            newElementDiv(document.body, { className: 'mainContainer' });

        this.navbarController =
            new NavbarController(this, this.mainContainer);

        this.controllerContainer =
            newElementDiv(this.mainContainer, { className: 'controllerContainer' });

        this.menuController =
            new MenuController(this, this.controllerContainer);
        this.currentController = null;
    }

    showController(type) {
        this.navbarController.showBackBtn();
        switch (type) {
            case NONE:
                break;
            case MENU:
                if (this.currentController !== null) {
                    this.currentController.delete();
                    this.currentController = null;
                    this.navbarController.hideBackBtn();
                }
                break;
            case LOGIN:
                this.currentController = new LoginController(this, this.controllerContainer)
                break;
            case PLAY:
                break;
            case SCORES:
                break;
            case DIFFICULTY:
                break;
            case THEMES:
                break;
            case CREDITS:
                break;
            default:
                break;
        }
    }
}