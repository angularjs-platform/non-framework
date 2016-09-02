<md-menu-bar flex>
    <md-menu ng-repeat-start="first in menuList.main track by first.id" ng-if="first.ref">
        <button ng-click="$mdOpenMenu()">{{first.title}}</button>
        <md-menu-content>
            <md-menu-item ng-repeat="second in menuList[first.ref] track by second.id">
                <md-button ng-if="!second.ref" href="{{second.url}}">{{second.title}}</md-button>
                <md-menu ng-if="second.ref">
                    <md-button ng-click="$mdOpenMenu()">{{second.title}}</md-button>
                    <md-menu-content>
                        <md-menu-item ng-repeat="third in menuList[second.ref] track by third.id">
                            <md-button ng-if="!third.ref" href="{{third.url}}">{{third.title}}</md-button>
                            <md-menu ng-if="third.ref">
                                <md-button ng-click="$mdOpenMenu()">{{third.title}}</md-button>
                                <md-menu-content>
                                    <md-menu-item ng-repeat="fourth in menuList[third.ref] track by fourth.id">
                                        <md-button ng-if="!fourth.ref" href="{{fourth.url}}">{{fourth.title}}</md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-menu-item>
        </md-menu-content>
    </md-menu>
    <button ng-if="first.url" ng-repeat-end class="md-menu-bar-button"><a href="{{first.url}}">{{first.title}}</a></button>
</md-menu-bar>


