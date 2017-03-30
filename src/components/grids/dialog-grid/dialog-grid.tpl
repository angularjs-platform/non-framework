<md-dialog aria-label="{{'DIALOG.GRID' | translate}}">
    <md-dialog-content>
        <non-data-grid source="vm.source" provider="vm"> </non-data-grid>
    </md-dialog-content>
    <md-dialog-actions>
        <md-button ng-click="vm.closeDialog()" class="md-primary">
            {{'BUTTON.CLOSE' | translate}}
        </md-button>
    </md-dialog-actions>
</md-dialog>
