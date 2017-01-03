<div layout="column" class="md-whiteframe-4dp" flex>
    <md-toolbar layout-padding>
        <span translate>{{$ctrl.title}}</span>
    </md-toolbar>
    <md-content class="page-content" non-lean-scroll>
        <ng-transclude></ng-transclude>
    </md-content>
</div>
