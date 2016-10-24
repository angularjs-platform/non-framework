<form name="$ctrl.form" ng-submit="$ctrl.submit($event)" novalidate>
    <formly-form model="$ctrl.configuration.model" fields="$ctrl.configuration.fields"
            options="$ctrl.configuration.options" form="$ctrl.form">
        <ng-transclude></ng-transclude>
    </formly-form>
</form>
