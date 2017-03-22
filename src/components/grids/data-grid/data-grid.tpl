<non-page-content-wrapper layout="column" title= "{{$ctrl.title}}" flex>
    <non-form ng-if="$ctrl.searchFormConfiguration.fields" configuration="$ctrl.searchFormConfiguration" custom-submit="$ctrl.performSearch"></non-form>
    <div ng-if="$ctrl.options" ui-grid="$ctrl.options" ui-grid-selection ui-grid-pagination></div>
</non-page-content-wrapper>
