import {IConfigurationService, Configuration} from './config';

export class ConfigurationService implements IConfigurationService {

    private config: Configuration;

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
        this.config = {
            primaryMenuList: {},
            viewConfig: []
        };
    }

    public loadConfig = (): ng.IPromise<any> => {
        return this.$http.get('/config', {}).then(this.getCompleteHandler);
    };

    public getFullConfig = (): Configuration => {
        return this.config;
    };

    public hasConfig = (configName: string): boolean => {
        return this.config.viewConfig.indexOf(configName) !== -1;
    };

    private getCompleteHandler: any = (response: any) => {
        this.config = response.data;
        return this.config;
    };
}
