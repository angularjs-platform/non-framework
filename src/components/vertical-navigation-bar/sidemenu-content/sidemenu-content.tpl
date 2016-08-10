<div class="md-sidemenu-content" layout="column">
    <md-button class="md-sidemenu-toggle" ng-if="vm.heading" ng-click="vm.changeState();" ng-class="{ 'md-active': vm.visible }">
    <div layout="row">
        <md-icon ng-if="vm.svgIcon" md-svg-icon="vm.svgIcon"></md-icon>
        <md-icon ng-if="vm.icon">{{ vm.icon }}</md-icon>
        <span flex>{{ vm.heading }}</span>
        <md-icon ng-if="vm.arrow" md-svg-icon="chevron-down"></md-icon>
    </div>
    </md-button>
    <div class="md-sidemenu-wrapper" md-sidemenu-disable-animate ng-class="{ 'md-active': vm.visible, 'md-sidemenu-wrapper-icons':  vm.icon }" layout="column" ng-transclude></div>
</div>
