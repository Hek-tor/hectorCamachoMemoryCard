/**
* @name appManager
* @file Manage the app.
* @author Hector Emilio hectoremdz@gmail.com
*/
import { CreditsController } from './controllers/creditsController/creditsController.js';
import { DifficultyController } from './controllers/difficultyController/difficultyController.js';
import { LoginController } from './controllers/loginController/loginController.js';
import { MenuController } from './controllers/menuController/menuController.js';
import { NavbarController } from './controllers/navbarController/navbarController.js';
import { PlayController } from './controllers/playController/playController.js';
import { ScoreController } from './controllers/scoreController/scoreController.js';
import { ThemesController } from './controllers/themesController/themesController.js';
import { CREDITS, DIFFICULTY, DIFFICULTY_MEDIUM, LOGIN, MENU, NONE, PLAY, SCORES, THEMES, THEMES_ANIMALS } from './libs/constants.js';
import { div } from './libs/html.js';

export class AppManager {
    constructor() {
        this.mainContainer =
            div(document.body, { className: 'mainContainer' });

        this.navbarController =
            new NavbarController(this, this.mainContainer);

        this.controllerContainer =
            div(this.mainContainer, { className: 'controllerContainer' });

        this.menuController =
            new MenuController(this, this.controllerContainer);
        this.currentController = null;

        if (!localStorage.getItem('difficulty')) {
            window.localStorage.setItem('difficulty', DIFFICULTY_MEDIUM);
        }
        if (!localStorage.getItem('theme')) {
            window.localStorage.setItem('theme', THEMES_ANIMALS);
        }
        this.showController(CREDITS)
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

    getDifficulty() {
        return localStorage.getItem('difficulty');
    }

    getTheme() {
        return localStorage.getItem('theme');
    }
}
