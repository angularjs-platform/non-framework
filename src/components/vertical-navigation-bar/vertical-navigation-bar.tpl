<md-content md-scroll-y layout="column">
    <md-sidemenu locked="false">
        <md-sidemenu-group ng-repeat="first in menuList.main track by first.id">
            <md-button class="md-sidemenu-button" ng-if="first.url" href="{{first.url}}">{{first.title}}</md-button>
            <non-sidemenu-content ng-if="first.ref" md-heading="{{first.title}}" md-arrow="true" flex="98">
                <md-button class="md-sidemenu-button" ng-repeat-start="second in menuList[first.ref] track by second.id" ng-if="second.url" href="{{second.url}}">
                    {{second.title}}
                </md-button>
                <non-sidemenu-content ng-if="second.ref" md-heading="{{second.title}}" md-arrow="true" ng-repeat-end>
                    <md-button class="md-sidemenu-button" ng-repeat-start="third in menuList[second.ref] track by third.id" ng-if="third.url" href="{{third.url}}">
                        {{third.title}}
                    </md-button>
                    <non-sidemenu-content ng-if="third.ref" md-heading="{{third.title}}" md-arrow="true" ng-repeat-end>
                        <md-button class="md-sidemenu-button" ng-repeat="fourth in menuList[third.ref] track by fourth.id" ng-if="fourth.url" href="{{fourth.url}}">
                            {{fourth.title}}
                        </md-button>
                    </non-sidemenu-content>
                </non-sidemenu-content>
            </non-sidemenu-content>
            <md-divider ng-if="!$last"></md-divider>
        </md-sidemenu-group>
    </md-sidemenu>
</md-content>
