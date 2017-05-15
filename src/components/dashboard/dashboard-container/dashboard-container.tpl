<md-content flex>
    <md-tabs md-selected="0" flex md-swipe-content md-border-bottom md-autoselect>
      <md-tab ng-repeat="tab in $ctrl.dashboardTabs" ng-disabled="tab.disabled">
            <md-tab-label>
                <span>{{tab.title}}</span>
            </md-tab-label>
            <md-tab-body>
                <md-content>
                    <div>Here {{tab.title}} will appear</div>
                </md-content>
            </md-tab-body>
      </md-tab>
    </md-tabs>
</md-content>
<md-fab-speed-dial md-direction="up" class="md-fling md-fab-bottom-right">
    <md-fab-trigger>
        <md-button class="md-fab md-primary" aria-label="Page Action Button">
            <md-icon md-svg-icon="silverware" class="icon"></md-icon>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button class="md-fab md-mini md-accent" aria-label="Maximize Minimize Button">
            <md-icon md-svg-icon="crop-free" class="icon"></md-icon>
        </md-button>
        <md-button class="md-fab md-mini md-accent" ng-click="vm.scrollToTop()" aria-label="Scroll To Top Button">
            <md-icon md-svg-icon="chevron-double-up" class="icon"></md-icon>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>
