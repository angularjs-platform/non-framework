<md-menu-bar flex>
    <md-menu ng-repeat-start="first in $ctrl.menuList.main track by first.id" ng-if="first.reference">
        <button ng-click="$mdMenu.open()">{{first.title | translate}}</button>
        <md-menu-content class="primary-horizontal-menu-content">
            <md-menu-item ng-repeat="second in $ctrl.menuList[first.reference] track by second.id">
                <md-button ng-if="!second.reference" href="#{{second.url}}" ng-class="{'active': second.active}">{{second.title | translate}}</md-button>
                <md-menu ng-if="second.reference">
                    <md-button ng-click="$mdMenu.open()">{{second.title | translate}}</md-button>
                    <md-menu-content class="primary-horizontal-menu-content">
                        <md-menu-item ng-repeat="third in $ctrl.menuList[second.reference] track by third.id">
                            <md-button ng-if="!third.reference" href="#{{third.url}}" ng-class="{'active': third.active}">{{third.title | translate}}</md-button>
                            <md-menu ng-if="third.reference">
                                <md-button ng-click="$mdMenu.open()">{{third.title | translate}}</md-button>
                                <md-menu-content class="primary-horizontal-menu-content">
                                    <md-menu-item ng-repeat="fourth in $ctrl.menuList[third.reference] track by fourth.id">
                                        <md-button ng-if="!fourth.reference" href="#{{fourth.url}}" ng-class="{'active': fourth.active}">{{fourth.title | translate}}</md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-menu-item>
        </md-menu-content>
    </md-menu>
    <button ng-if="first.url" ng-repeat-end class="md-menu-bar-button" ng-class="{'active': first.active}"><a href="#{{first.url}}">{{first.title | translate}}</a></button>
</md-menu-bar>


