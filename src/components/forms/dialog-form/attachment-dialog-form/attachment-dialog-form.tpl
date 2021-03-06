<md-dialog>
    <md-dialog-content>
        <form name="form">
            <md-input-container>
                <label translate>DIALOG.TITLE</label>
                <input ng-model="vm.form.title">
            </md-input-container>
            <input type="file" ngf-select ng-model="vm.form.file" name="file">
        </form>
    </md-dialog-content>
    <md-dialog-actions>
        <md-button ng-click="vm.saveData()" class="md-primary">{{ 'BUTTON.SAVE' | translate}}</md-button>
        <md-button ng-click="vm.closeDialog()" class="md-primary">{{ 'BUTTON.CANCEL' | translate}}</md-button>
    </md-dialog-actions>
</md-dialog>
