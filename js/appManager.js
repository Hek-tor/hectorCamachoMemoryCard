/**
* @name appManager
* @file Manage the app.
* @author Hector Emilio hectoremdz@gmail.com
*/

import { CreditsController } from "./controllers/creditsController/creditsController.js";
import { DifficultyController } from "./controllers/difficultyController/difficultyController.js";
import { LoginController } from "./controllers/loginController/loginController.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController.js";
import { PlayController } from "./controllers/playController/playController.js";
import { ScoreController } from "./controllers/scoreController/scoreController.js";
import { ThemesController } from "./controllers/themesController/themesController.js";
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
                this.currentController = new LoginController(this, this.controllerContainer);
                break;
            case PLAY:
                this.currentController = new PlayController(this, this.controllerContainer);
                break;
            case SCORES:
                this.currentController = new ScoreController(this, this.controllerContainer);
                break;
            case DIFFICULTY:
                this.currentController = new DifficultyController(this, this.controllerContainer);
                break;
            case THEMES:
                this.currentController = new ThemesController(this, this.controllerContainer);
                break;
            case CREDITS:
                this.currentController = new CreditsController(this, this.controllerContainer);
                break;
            default:
                break;
        }
    }
}