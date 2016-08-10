import {ILayoutService} from '../../framework.model';
import {ILeanScrollService} from './lean-scroll';

class LeanScrollDirective implements ng.IDirective {

    restrict = 'AE';

    static instance($timeout: ng.ITimeoutService,
                    LeanScroll: ILeanScrollService,
                    Layout: ILayoutService,
                    PerfectScrollbar: any): ng.IDirective {
        'ngInject';

        return new LeanScrollDirective($timeout, LeanScroll, Layout, PerfectScrollbar);
    }

    constructor(private $timeout: ng.ITimeoutService,
                private LeanScroll: ILeanScrollService,
                private Layout: ILayoutService,
                private PerfectScrollbar: any) {
    }

    compile(tElement: any): any {
        const perfectScroll: any = this.PerfectScrollbar;
        if (this.Layout.isMobile()) {
            return;
        }

        // Add class
        tElement.addClass('non-lean-scroll');

        return function postLink(scope: any, iElement: any, iAttrs: any): any {
            let options: any = {};

            // If options supplied, evaluate the given
            // value. This is because we don't want to
            // have an isolated scope but still be able
            // to use scope variables.
            // We don't want an isolated scope because
            // we should be able to use this everywhere
            // especially with other directives
            if ( iAttrs.msScroll ) {
                options = scope.$eval(iAttrs.msScroll);
            }

            // Extend the given config with the ones from provider
            options = angular.extend({}, this.LeanScroll.getConfig(), options);

            // Initialize the scrollbar
            this.$timeout(function (): any {
                perfectScroll.initialize(iElement[0], options);
            }, 0);

            // Update the scrollbar on element mouseenter
            iElement.on('mouseenter', updateScrollbar);

            // Watch scrollHeight and update
            // the scrollbar if it changes
            scope.$watch(function (): any {
                return iElement.prop('scrollHeight');
            }, function (current: any, old: any): any {
                if ( angular.isUndefined(current) || angular.equals(current, old)) {
                    return;
                }
                updateScrollbar();
            });

            // Watch scrollWidth and update
            // the scrollbar if it changes
            scope.$watch(function (): any {
                return iElement.prop('scrollWidth');
            }, function (current: any, old: any): any {
                if ( angular.isUndefined(current) || angular.equals(current, old)) {
                    return;
                }

                updateScrollbar();
            });

            /**
             * Update the scrollbar
             */
            function updateScrollbar(): any {
                perfectScroll.update(iElement[0]);
            }

            // Cleanup on destroy
            scope.$on('$destroy', function (): any {
                iElement.off('mouseenter');
                perfectScroll.destroy(iElement[0]);
            });
        };
    }
}

export default LeanScrollDirective.instance;
