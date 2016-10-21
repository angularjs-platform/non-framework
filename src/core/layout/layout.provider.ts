import {ILayoutService, ILayoutProvider} from './layout';
declare const MobileDetect: any;

class LayoutService implements ILayoutService {

    constructor(private primaryLayoutType: string, private secondaryLayoutType: string,
                private mobile: boolean) {}

    public getPrimaryLayoutType = (): string => {
        return this.primaryLayoutType;
    }

    public getSecondaryLayoutType = (): string => {
        return this.secondaryLayoutType;
    }

    public isMobile = (): boolean => {
        return this.mobile;
    }
}

export class LayoutProvider implements ILayoutProvider {

    private primaryLayoutType: string;
    private secondaryLayoutType: string;
    private isMobile: boolean;

    private primaryLayouts: any = {
        verticalNavigation: require('./primary/vertical-navigation.tpl'),
        horizontalNavigation: require('./primary/horizontal-navigation.tpl'),
        contentOnly: require('./primary/content-only.tpl'),
        contentWithToolbar: require('./primary/content-with-toolbar.tpl')
    };

    private secondaryLayouts: any = {
        verticalNavigation: require('./secondary/vertical-navigation.tpl'),
        horizontalNavigation: require('./secondary/horizontal-navigation.tpl'),
        contentOnly: require('./secondary/content-only.tpl'),
        contentWithToolbar: require('./secondary/content-with-toolbar.tpl')
    };

    constructor() {

        // Inject localStorageService
        let localStorageService: any;
        let $window: any;

        // This needs to be done because we cant access localStorageService service through dependency injection
        // Hack suggested in all forums
        angular.injector(['LocalStorageModule', 'ng']).invoke([
            'localStorageService', '$window', function (_localStorageService: any, _$window: any): any
            {
                localStorageService = _localStorageService;
                $window = _$window;
            }
        ]);

        const mobileDetect: any = new MobileDetect($window.navigator.userAgent);
        this.isMobile = mobileDetect.mobile();
        if (this.isMobile) {
            this.primaryLayoutType = 'verticalNavigation';
            this.secondaryLayoutType = 'verticalNavigation';
        }
        else {
            this.primaryLayoutType = localStorageService.get('primaryLayoutType') || 'verticalNavigation';
            this.secondaryLayoutType = localStorageService.get('secondaryLayoutType') || 'horizontalNavigation';
        }
    }

    public $get = (): ILayoutService => {
        return new LayoutService(this.primaryLayoutType, this.secondaryLayoutType, this.isMobile);
    };

    public setPrimaryLayouts = (primaryLayouts: any): void => {
        this.primaryLayouts = primaryLayouts;
    }

    public setSecondaryLayouts = (secondaryLayouts: any): void => {
        this.secondaryLayouts = secondaryLayouts;
    }

    public getPrimaryLayoutFromType = (layoutType: string): string => {
        return this.primaryLayouts[layoutType];
    }

    public getPrimaryLayout = (): string => {
        return this.primaryLayouts[this.primaryLayoutType];
    }

    public getSecondaryLayoutFromType = (layoutType: string): string => {
        return this.secondaryLayouts[layoutType];
    }

    public getSecondaryLayout = (): string => {
        return this.secondaryLayouts[this.secondaryLayoutType];
    }
}
