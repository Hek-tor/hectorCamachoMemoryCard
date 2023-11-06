export class Controller {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.parent = parent;
        this.view = null;
    }

    delete() {
        this.view.moveOut();
    }
}