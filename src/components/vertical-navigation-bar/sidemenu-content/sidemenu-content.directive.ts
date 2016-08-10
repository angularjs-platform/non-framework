import {SidemenuContentController} from './sidemenu-content.controller';

class SidemenuContentDirective implements ng.IDirective {

    restrict = 'E';
    scope = {
      heading: '@mdHeading',
      icon: '@?mdIcon',
      svgIcon: '@?mdSvgIcon',
      arrow: '@?mdArrow'
    };
    replace = true;
    transclude = true;

    controller = SidemenuContentController;
    controllerAs = 'vm';
    template = require('./sidemenu-content.tpl');
    bindToController = true;

    static instance(): ng.IDirective {
        return new SidemenuContentDirective();
    }
}

export default SidemenuContentDirective.instance;
