export interface IConfigurationService {

    loadConfig(): ng.IPromise<any>;
    getFullConfig(): Configuration;
    hasConfig(configName: string): boolean;
}

export type Configuration = {
    primaryMenuList: {},
    viewConfig: string[]
}
