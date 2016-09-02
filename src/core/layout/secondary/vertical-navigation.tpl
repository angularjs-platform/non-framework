<div layout="column" class="non-secondary-layout-container non-secondary-layout-container-vertical" flex>

    <div ui-view="secondaryToolbar" layout-margin></div>

    <div class="secondary-content-container" flex layout="row">
        <div ui-view="secondaryVerticalNavigation"></div>

        <md-content ui-view="content" layout="column" flex non-lean-scroll></md-content>
    </div>
</div>
