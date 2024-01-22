export class Controller {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.service = null;
        this.view = null;
        this.parent = parent;
    }

    delete() {
        this.view.moveOut();
    }
}