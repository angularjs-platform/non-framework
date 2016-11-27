<div layout="column" layout-margin flex>
    <select multiple ng-multiple="true" ng-model="fromList" ng-options="obj.name for obj in $ctrl.source" non-lean-scroll></select>
    <div layout="row" layout-align="center center">
        <md-button class="md-raised md-primary md-ink-ripple" type="button" ng-click="$ctrl.add(fromList)" ng-disabled="!fromList.length" translate>ADD</md-button>
        <md-button class="md-raised md-primary md-ink-ripple" type="button" ng-click="$ctrl.remove(toList)" ng-disabled="!toList.length" translate>REMOVE</md-button>
    </div>
    <select multiple ng-multiple="true" ng-model="toList" ng-options="obj.name for obj in $ctrl.target" non-lean-scroll></select>
</div>
