/**
* @name appManager
* @file Manage the app.
* @author Hector Emilio hectoremdz@gmail.com
*/

import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController.js";
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
    }
}