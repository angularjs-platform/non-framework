export interface IConfigurationService {

    loadConfig(): ng.IPromise<any>;
    getConfig(): Configuration;
}

export type Configuration = {
    menuOrder: {},
    viewConfig: string[]
}
