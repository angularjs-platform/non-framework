<formly-transclude></formly-transclude>
<div ng-messages="options.formControl.$error">

    <!-- Dynamic Messages from Metadata-->
    <div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">
        {{ message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}
    </div>

    <!-- Input Field: Generic -->
    <div ng-message="required" translate>FIELD_REQUIRED</div>
    <div ng-message="minlength" translate>FIELD_MIN_LENGTH_NEEDED</div>
    <div ng-message="md-maxlength" translate>FIELD_MAX_LENGTH_EXCEEDED</div>

    <!-- Input Number Field -->
    <div ng-message="min" translate>FIELD_MIN_VALUE_NEEDED</div>
    <div ng-message="max" translate>FIELD_MAX_VALUE_EXCEEDED</div>

    <!-- Input Email Field -->
    <div ng-message="email" translate>FIELD_NOT_EMAIL</div>

    <!-- Input URL Field -->
    <div ng-message="url" translate>FIELD_NOT_URL</div>
</div>
