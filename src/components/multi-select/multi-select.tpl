<div>
    <select multiple ng-multiple="true" ng-model="fromList" ng-options="obj.name for obj in $ctrl.source"></select>
    <button type="button" ng-click="$ctrl.add(fromList)" ng-disabled="!fromList.length">Add</button>
    <button type="button" ng-click="$ctrl.remove(toList)" ng-disabled="!toList.length">Remove</button>
    <select multiple ng-multiple="true" ng-model="toList" ng-options="obj.name for obj in $ctrl.target"></select>
</div>
