import {ILayoutService} from './layout';

export class LayoutService implements ILayoutService {

    constructor(private localStorageService: angular.local.storage.ILocalStorageService,
                private $mdMedia: ng.material.IMedia) {
        'ngInject';
    }

    public getPrimaryLayoutType = (): string => {
        if (this.isMobile()) {
            return 'vertical';
        }
        else {
            return <string>this.localStorageService.get('primaryLayoutType') || 'vertical';
        }
    }

    public getSecondaryLayoutType = (): string => {
        if (this.isMobile()) {
            return 'vertical';
        }
        else {
            return <string>this.localStorageService.get('secondaryLayoutType') || 'vertical';
        }
    }

    public setPrimaryLayoutType = (primaryLayoutType: any): void => {
        this.localStorageService.set('primaryLayoutType', primaryLayoutType);
    }

    public setSecondaryLayoutType = (secondaryLayoutType: any): void => {
        this.localStorageService.set('secondaryLayoutType', secondaryLayoutType);
    }

    public isMobile = (): boolean => {
        return !this.$mdMedia('gt-sm');
    }
}
