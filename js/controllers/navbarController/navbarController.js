import { MENU } from "../../libs/constants.js";
import { div, img } from "../../libs/html.js";
import { View } from "../../views/view.js";
import { Controller } from "../controller.js";

export class NavbarController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className = 'navbarController';

        this.backBtn
            = div(this.view.container,
                { className: 'navbarController_backBtn', onclick: this.onBackBtn.bind(this), innerHTML: '〱' });
        this.hideBackBtn();

        this.bannerLogo = img(this.view.container, { className: 'bannerLogo' });
        this.bannerLogo.src = '../assets/logo.png';
    }

    onBackBtn() {
        this.appManager.showController(MENU);
    }

    hideBackBtn() {
        this.backBtn.classList.add('hidden');
    }

    showBackBtn() {
        this.backBtn.classList.remove('hidden');
    }
}