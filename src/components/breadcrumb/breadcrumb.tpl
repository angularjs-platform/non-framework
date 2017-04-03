<div class="breadcrumb" ng-show="steps.length >= 1">
    <a ui-sref="app.home" class="home"><md-icon md-svg-icon="home" class="icon"></md-icon></a>
    <span hide show-gt-sm>
        <a ng-if="steps.length > 6"><md-icon md-svg-icon="dots-horizontal" class="icon"></md-icon></a>
        <a ng-repeat="step in steps | limitTo: -6" ng-class="{active: $last}"
            ng-attr-href="{{ step.abstract ? undefined : step.ncyBreadcrumbLink }}">{{step.ncyBreadcrumbLabel | translate}}</a>
    </span>
    <span hide show-sm>
        <a ng-if="steps.length > 3"><md-icon md-svg-icon="dots-horizontal" class="icon"></md-icon></a>
        <a ng-repeat="step in steps | limitTo: -3" ng-class="{active: $last}"
            ng-attr-href="{{ step.abstract ? undefined : step.ncyBreadcrumbLink }}">{{step.ncyBreadcrumbLabel | translate}}</a>
    </span>
    <span hide show-xs>
        <a ng-repeat="step in steps | limitTo: -1" ng-class="{active: $last}"
            ng-attr-href="{{ step.abstract ? undefined : step.ncyBreadcrumbLink }}">{{step.ncyBreadcrumbLabel | translate}}</a>
    </span>
</div>
