import {IThemeService} from './theme';

export class ThemeService implements IThemeService {

    private theme: string;

    constructor(private $cookies: ng.cookies.ICookiesService) {
        'ngInject';

        this.theme = this.$cookies.get('theme') || 'base';
    }

    public getTheme = (): string => {
        return this.theme;
    }
}
