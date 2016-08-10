<div layout="column" class="non-primary-layout-container non-primary-layout-container-horizontal" flex>

    <div ui-view="toolbar"></div>

    <div ui-view="horizontalNavigation"></div>
    
    <div class="content-container" layout="row" flex>
        <div ui-view="secondary-main" layout="column" layout-margin flex non-lean-scroll></div>
        
        <div ui-view="quickpanel"></div>
    </div>
</div>
