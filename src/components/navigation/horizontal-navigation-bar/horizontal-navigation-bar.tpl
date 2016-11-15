<md-menu-bar flex>
    <md-menu ng-repeat-start="first in $ctrl.menuList.main track by first.id" ng-if="first.reference">
        <button ng-click="$mdOpenMenu()">{{first.title}}</button>
        <md-menu-content class="primary-horizontal-menu-content">
            <md-menu-item ng-repeat="second in $ctrl.menuList[first.reference] track by second.id">
                <md-button ng-if="!second.reference" href="#{{second.url}}">{{second.title}}</md-button>
                <md-menu ng-if="second.reference">
                    <md-button ng-click="$mdOpenMenu()">{{second.title}}</md-button>
                    <md-menu-content class="primary-horizontal-menu-content">
                        <md-menu-item ng-repeat="third in $ctrl.menuList[second.reference] track by third.id">
                            <md-button ng-if="!third.reference" href="#{{third.url}}">{{third.title}}</md-button>
                            <md-menu ng-if="third.reference">
                                <md-button ng-click="$mdOpenMenu()">{{third.title}}</md-button>
                                <md-menu-content class="primary-horizontal-menu-content">
                                    <md-menu-item ng-repeat="fourth in $ctrl.menuList[third.reference] track by fourth.id">
                                        <md-button ng-if="!fourth.reference" href="#{{fourth.url}}">{{fourth.title}}</md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-menu-item>
        </md-menu-content>
    </md-menu>
    <button ng-if="first.url" ng-repeat-end class="md-menu-bar-button"><a href="#{{first.url}}">{{first.title}}</a></button>
</md-menu-bar>

