import {IGenericFormSubmissionService} from './form-submission';

export class GenericFormSubmissionService implements IGenericFormSubmissionService {

    constructor(
        private $http: ng.IHttpService) {
        'ngInject';
    }

    public submit = (actionURL: string, formModel: any): ng.IPromise<any> => {
        return this.$http.post(actionURL, formModel).then(getCompleteHandler);

        function getCompleteHandler(response: any): any {
            return response.data;
        }
    }
}
