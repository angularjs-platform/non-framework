<md-content flex layout-padding>
    <h2> {{$ctrl.title}} </h2>
    <div ng-if="$ctrl.options" ui-grid="$ctrl.options" ui-grid-selection ui-grid-pagination></div>
</md-content>
