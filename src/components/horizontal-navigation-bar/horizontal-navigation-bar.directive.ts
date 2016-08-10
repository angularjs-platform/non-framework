class HorizontalNavigationBarDirective implements ng.IDirective {

    restrict = 'E';
    scope = {
        menuList: '='
    };

    template = require('./horizontal-navigation-bar.tpl');

    static instance(): ng.IDirective {
        return new HorizontalNavigationBarDirective();
    }
}

export default HorizontalNavigationBarDirective.instance;
