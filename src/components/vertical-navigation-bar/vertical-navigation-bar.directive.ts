class VerticalNavigationBarDirective implements ng.IDirective {

    restrict = 'E';
    scope = {
        menuList: '='
    };

    template = require('./vertical-navigation-bar.tpl');

    static instance(): ng.IDirective {
        return new VerticalNavigationBarDirective();
    }
}

export default VerticalNavigationBarDirective.instance;
