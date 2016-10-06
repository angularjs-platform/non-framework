<md-radio-group ng-model="model[options.key]" md-theme="{{to.theme}}" class="md-primary">
    <md-radio-button
            ng-repeat="option in to.options"
            ng-disabled="to.disabled"
            ng-value="option[to.valueProp || 'value']">
            {{option[to.labelProp || 'name']}}
    </md-radio-button>
</md-radio-group>
