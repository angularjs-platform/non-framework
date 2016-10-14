import {IMenuService} from './menu';

export class MenuService implements IMenuService {

    private primaryMenuList: any;
    private secondaryMenuList: any;

    constructor() {

        this.primaryMenuList = {};
        this.secondaryMenuList = {};
    }

    public getPrimaryMenuList = (): {} => {
        return this.primaryMenuList;
    }

    public getSecondaryMenuList = (): {} => {
        return this.secondaryMenuList;
    }

    public setPrimaryMenuList = (rawPrimaryMenuList: {}): void => {
        this.primaryMenuList = rawPrimaryMenuList;
    }


    public setSecondaryMenuList = (rawSecondaryMenuList: {}): void => {
        this.secondaryMenuList = rawSecondaryMenuList;
    }
}
