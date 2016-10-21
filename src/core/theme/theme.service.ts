import {IThemeService} from './theme';

export class ThemeService implements IThemeService {

    private theme: string;

    constructor(private localStorageService: angular.local.storage.ILocalStorageService) {
        'ngInject';

        this.theme = <string> this.localStorageService.get('theme') || 'base';
    }

    public getTheme = (): string => {
        return this.theme;
    }
}
