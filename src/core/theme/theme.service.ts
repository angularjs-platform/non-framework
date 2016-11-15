import {IThemeService} from './theme';

export class ThemeService implements IThemeService {

    public theme: string;

    constructor(private localStorageService: angular.local.storage.ILocalStorageService) {
        'ngInject';

        this.theme = <string> this.localStorageService.get('theme') || 'base';
    }

    public getTheme = (): string => {
        return this.theme;
    }

    public setTheme = (theme: string): void => {
        this.localStorageService.set('theme', theme);
        this.theme = theme;
    }
}
