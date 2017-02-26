<label>
    {{to.label}}
    <span ng-if="to.maxItems" translate="GRID_ITEMS_COUNT"
        translate-values="{ count: getCount(), max: to.maxItems }"></span>
</label>
<non-grid-multiple-items grid-config="to.gridConfig" form-config="to.formConfig" items="model[options.key]"
    type="to.type" can-edit="to.canEdit" max-items="to.maxItems"> </non-grid-multiple-items>
