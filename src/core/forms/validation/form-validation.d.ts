export interface IGenericFormValidationService {

    validateUniqueAsync(endpointURL: string, parameters: Object): ng.IPromise<any>;
}

