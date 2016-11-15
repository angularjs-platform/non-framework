export class SidemenuContentController {

    public visible: boolean;
    constructor() {
        this.visible = false;
    }

    public changeState = () : void => {
        this.visible = !this.visible;
    };
}
