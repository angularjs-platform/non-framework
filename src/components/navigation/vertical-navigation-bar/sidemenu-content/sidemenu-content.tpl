<div class="md-sidemenu-content" layout="column">
    <md-button class="md-sidemenu-toggle" ng-if="$ctrl.heading" ng-click="$ctrl.changeState();" ng-class="{ 'md-active': $ctrl.visible }">
        <div layout="row">
            <md-icon ng-if="$ctrl.svgIcon" md-svg-icon="$ctrl.svgIcon"></md-icon>
            <md-icon ng-if="$ctrl.icon">{{ $ctrl.icon }}</md-icon>
            <span flex>{{ $ctrl.heading }}</span>
            <md-icon ng-if="$ctrl.arrow" md-svg-icon="chevron-down"></md-icon>
        </div>
    </md-button>
    <div class="md-sidemenu-wrapper" md-sidemenu-disable-animate ng-class="{ 'md-active': $ctrl.visible, 'md-sidemenu-wrapper-icons':  $ctrl.icon }" layout="column" ng-transclude></div>
</div>
