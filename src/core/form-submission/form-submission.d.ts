export interface IGenericFormSubmissionService {

    submit(actionURL: string, formModel: any): ng.IPromise<any>;
}

