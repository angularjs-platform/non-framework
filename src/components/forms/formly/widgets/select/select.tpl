<md-select ng-model="model[options.key]" md-theme="{{to.theme}}" ng-class="{ 'readonly': to.readonly}">
    <md-option ng-repeat="option in to.options" ng-value="option[to.valueProp || 'value']">
        {{ option[to.labelProp || 'name'] }}
    </md-option>
</md-select>
