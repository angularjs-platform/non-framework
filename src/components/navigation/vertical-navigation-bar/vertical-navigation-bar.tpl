<div layout="column" class="vertical-navigation-bar">
    <md-sidemenu locked="false">
        <md-sidemenu-group ng-repeat="first in $ctrl.menuList.main track by first.id">
            <md-button class="md-sidemenu-button" ng-if="first.url" href="#{{first.url}}" ng-class="{'active': first.active}">{{first.title | translate}}</md-button>
            <non-sidemenu-content ng-if="first.reference" md-heading="{{first.title}}" md-arrow="true">
                <md-button class="md-sidemenu-button" ng-repeat-start="second in $ctrl.menuList[first.reference] track by second.id"
                    ng-if="second.url" href="#{{second.url}}"  ng-class="{'active': second.active}">
                    {{second.title | translate}}
                </md-button>
                <non-sidemenu-content ng-if="second.reference" md-heading="{{second.title}}" md-arrow="true" ng-repeat-end>
                    <md-button class="md-sidemenu-button" ng-repeat-start="third in $ctrl.menuList[second.reference] track by third.id"
                        ng-if="third.url" href="#{{third.url}}" ng-class="{'active': third.active}">
                        {{third.title | translate}}
                    </md-button>
                    <non-sidemenu-content ng-if="third.reference" md-heading="{{third.title}}" md-arrow="true" ng-repeat-end>
                        <md-button class="md-sidemenu-button" ng-repeat="fourth in $ctrl.menuList[third.reference] track by fourth.id"
                            ng-if="fourth.url" href="#{{fourth.url}}" ng-class="{'active': fourth.active}">
                            {{fourth.title | translate}}
                        </md-button>
                    </non-sidemenu-content>
                </non-sidemenu-content>
            </non-sidemenu-content>
            <md-divider></md-divider>
        </md-sidemenu-group>
    </md-sidemenu>
</div>
