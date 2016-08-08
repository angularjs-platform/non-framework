<div layout="column" class="non-primary-layout-container non-primary-layout-container-vertical" flex>

    <div ui-view="toolbar"></div>

    <div class="content-container" flex layout="row">
        <div ui-view="verticalNavigation"></div>
        
        <div ui-view="secondary-main" layout="column" layout-margin flex non-lean-scroll></div>
        
        <div ui-view="quickpanel"></div>
    </div>
</div>
