class AccessibleFormDirective implements ng.IDirective {

    restrict = 'A';

    static instance(): ng.IDirective {
        'ngInject';

        return new AccessibleFormDirective();
    }

    constructor() {
        // Empty
    }

    link(scope: ng.IScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {

        // set up event handler on the form element
        elements.on('submit', function (): void {

            // find the first invalid element
            const firstInvalid: any = elements[0].querySelector('.ng-invalid');

            // if we find one, set focus
            if (firstInvalid) {
                firstInvalid.focus();
            }
        });
    }
}

export default AccessibleFormDirective.instance;
