export class HttpInterceptor implements ng.IHttpInterceptor {

    constructor(
        private $q: ng.IQService,
        private $rootScope: ng.IRootScopeService,
        private $log: ng.ILogService
    ) {
        'ngInject';
    }

    public request = (config: ng.IRequestConfig): ng.IRequestConfig => {
        return config;
    };

    public requestError = (rejection: any): any => {
        // With this you demo that this interceptor is working.
        this.$log.error(rejection);

        this.$rootScope.$broadcast('http-request-error', rejection.status, rejection.statusText, rejection.headers);

        return this.$q.reject(rejection);
    };

    public response = (resp: any): any => {
        return resp;
    };

    public responseError = (rejection: any): any => {
        // With this you demo that this interceptor is working.
        this.$log.error(rejection);

        this.$rootScope.$broadcast('http-response-error', rejection.status, rejection.statusText, rejection.headers);

        return this.$q.reject(rejection);
    };
}
