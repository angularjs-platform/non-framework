<md-dialog>
    <md-dialog-content>
        <non-form configuration="vm.formConfig"></non-form>
    </md-dialog-content>
    <md-dialog-actions>
        <md-button ng-click="vm.saveData()" class="md-primary" translate>{{ 'BUTTON.SAVE' | translate}}</md-button>
        <md-button ng-click="vm.closeDialog()" class="md-primary" translate>{{ 'BUTTON.CANCEL' | translate}}</md-button>
    </md-dialog-actions>
</md-dialog>
