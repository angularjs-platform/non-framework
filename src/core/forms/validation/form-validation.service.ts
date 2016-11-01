import {IGenericFormValidationService} from './form-validation';

export class GenericFormValidationService implements IGenericFormValidationService {

    constructor(private $translate: ng.translate.ITranslateService,
                private $http: ng.IHttpService) {
        'ngInject';
    }

    public validateUniqueAsync = (endpointURL: string, parameters: Object): ng.IPromise<any> => {
        return this.$http.post(endpointURL, parameters).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            if (!response.data.valid) {
                // This need not be localized.
                // It is used to notify the watcher that there is a server error on uniqueness validation
                throw 'Not Unique';
            }
        }
    };
}
