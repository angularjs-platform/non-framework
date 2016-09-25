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

    public setPrimaryMenuList = (rawPrimaryMenuList: {}[]): void => {
        if (rawPrimaryMenuList) {
            rawPrimaryMenuList.forEach((menu: any): void => {
               this.primaryMenuList[menu.id] = menu.menuList;
           });
        }
    }


    public setSecondaryMenuList = (rawSecondaryMenuList: {}[]): void => {
        if (rawSecondaryMenuList) {
            rawSecondaryMenuList.forEach((menu: any): void => {
               this.secondaryMenuList[menu.id] = menu.menuList;
           });
        }
    }
}
