/**
* @name appManager
* @file Manage the operation of the app.
* @author Hector Emilio hectoremdz@gmail.com
* @version 1.0.0
*/

export class AppManager {
    constructor() {
        this.mainContainer = document.createElement('div');
        this.mainContainer.className = 'mainContainer';
        document.body.appendChild(this.mainContainer);

        this.navViewController = document.createElement('div');
        this.navViewController.className = 'navViewController';
        this.mainContainer.appendChild(this.navViewController);

        this.controllerContainer = document.createElement('div');
        this.controllerContainer.className = 'controllerContainer';
        this.mainContainer.appendChild(this.controllerContainer);
    }
}