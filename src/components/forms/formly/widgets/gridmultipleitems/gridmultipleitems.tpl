<label>
    <span translate>{{to.label}}</span>
    <span ng-if="to.maxItems" translate="GRID.ITEMS_COUNT"
        translate-values="{ count: getCount(), max: to.maxItems }"></span>
</label>
<non-grid-multiple-items grid-config="to.gridConfig" form-config="to.formConfig" items="model[options.key]"
    type="to.type" can-edit="to.canEdit" max-items="to.maxItems"> </non-grid-multiple-items>
