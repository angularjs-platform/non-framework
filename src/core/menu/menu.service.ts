import {IMenuService} from './menu';

export class MenuService implements IMenuService {

    private primaryMenuList: any;
    private secondaryMenuList: any;

    constructor() {
        this.primaryMenuList = null;
        this.secondaryMenuList = null;
    }

    public getPrimaryMenuList = (): any => {
        return this.primaryMenuList;
    }

    public getSecondaryMenuList = (): any => {
        return this.secondaryMenuList;
    }

    public setPrimaryMenuList = (rawPrimaryMenuList: any): void => {
        this.primaryMenuList = rawPrimaryMenuList;
    }


    public setSecondaryMenuList = (rawSecondaryMenuList: any): void => {
        this.secondaryMenuList = rawSecondaryMenuList;
    }
}
