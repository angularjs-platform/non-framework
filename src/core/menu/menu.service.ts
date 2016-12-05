import {IMenuService} from './menu';

export class MenuService implements IMenuService {

    private primaryMenuList: any;
    private secondaryMenuList: any;

    constructor(private _: _.LoDashStatic,
        private $rootScope: ng.IRootScopeService,
        private $state: ng.ui.IStateService) {
        'ngInject';

        this.primaryMenuList = null;
        this.secondaryMenuList = null;

        this.$rootScope.$on('$stateChangeSuccess', (event: any, toState: any, toParams: any, fromState: any, fromParams: any): any => {
            let url: string = this.$state.href(toState, {}, {absolute: true, inherit: false});
            url = url.split('/#')[1];
            this.setPrimaryActiveMenu(url);
            this.setSecondaryActiveMenu(url);
        });
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

    public setSecondaryMenuListID = (id: string): void => {
        const secondaryList: any = this._.cloneDeep(this.getPrimaryMenuList());
        secondaryList['main'] = this.getPrimaryMenuList()[id];

        this.secondaryMenuList = secondaryList;
    }

    private setPrimaryActiveMenu = (currentUrl: string): void => {
        this.setActiveMenu(this.primaryMenuList, currentUrl);
    }

    private setSecondaryActiveMenu = (currentUrl: string): void => {
        this.setActiveMenu(this.secondaryMenuList, currentUrl);
    }

    private setActiveMenu = (menulist: any, currentUrl: string): void => {
        this._.forEach(menulist, (menu: any, key: string): void => {
            let menuItem: any = this._.find(menu, (menuItems: any): any => {
                return menuItems.active === true;
            });

            if (menuItem) {
                menuItem.active = false;
            }

            menuItem = this._.find(menu, (menuItems: any): any => {
                return menuItems.url === currentUrl;
            });

            if (menuItem) {
                menuItem.active = true;
            }
        });
    }
}
