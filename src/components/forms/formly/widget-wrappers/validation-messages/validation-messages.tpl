<formly-transclude></formly-transclude>
<div ng-messages="options.formControl.$error"
    ng-if="options.formControl.$touched || (form.$submitted && formState.triggerFormValidation)" aria-live="assertive">

    <!-- Dynamic Messages from Metadata-->
    <div ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">
        {{ message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}
    </div>

    <!-- Input Field: Generic -->
    <div ng-message="required" translate>FORM.FIELD_REQUIRED</div>
    <div ng-message="minlength" translate>FORM.FIELD_MIN_LENGTH_NEEDED</div>
    <div ng-message="md-maxlength" translate>FORM.FIELD_MAX_LENGTH_EXCEEDED</div>

    <!-- Input Number Field -->
    <div ng-message="min" translate>FORM.FIELD_MIN_VALUE_NEEDED</div>
    <div ng-message="max" translate>FORM.FIELD_MAX_VALUE_EXCEEDED</div>

    <!-- Input Email Field -->
    <div ng-message="email" translate>FORM.FIELD_NOT_EMAIL</div>

    <!-- Input URL Field -->
    <div ng-message="url" translate>FORM.FIELD_NOT_URL</div>

    <!-- Date Field -->
    <div ng-message="valid" translate>FORM.FIELD_NOT_DATE</div>
    <div ng-message="mindate" translate>FORM.FIELD_MIN_DATE_NEEDED</div>
    <div ng-message="maxdate" translate>FORM.FIELD_MAX_DATE_EXCEEDED</div>
</div>
