export class Controller {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.service = null;
        this.parent = parent;
        this.view = null;
    }

    delete() {
        this.view.moveOut();
    }
}