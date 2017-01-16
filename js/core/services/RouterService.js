/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var RouterService = (function () {
            function RouterService($location, $routeParams) {
                this.$location = $location;
                this.$routeParams = $routeParams;
            }
            RouterService.prototype.routeToPage = function (pageName) {
                pageName = '/' + pageName;
                this.$location.path(pageName);
            };
            RouterService.prototype.getUrlParams = function (paramName) {
                return this.$routeParams[paramName];
            };
            RouterService.prototype.clearUrlParams = function () {
                this.$location.search('');
            };
            RouterService.$inject = ['$location', '$routeParams'];
            return RouterService;
        }());
        Services.RouterService = RouterService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
