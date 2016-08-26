<formly-transclude></formly-transclude>
<div ng-messages="options.formControl.$error" ng-if="options.validation.errorExistsAndShouldBeVisible">
    <!-- TODO:G Needs further implementation. Dynamic Messages from metadata is not working here bcoz it expects a function and not a string message -->
    <div ng-message="required" translate>FIELD_REQUIRED</div>
    <div ng-message="md-maxlength" translate>FIELD_MAX_LENGTH_EXCEEDED</div>
    <div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">{{ message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}</div>
</div>
