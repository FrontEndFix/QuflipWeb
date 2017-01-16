/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var RouteAuthorizationService = (function () {
            function RouteAuthorizationService($rootScope, routerService, authService) {
                this.$rootScope = $rootScope;
                this.routerService = routerService;
                this.authService = authService;
                $rootScope.$on('$routeChangeStart', function (event, next, current) {
                    if (next.routePermission) {
                        var result = authService.authorize(next.routePermission);
                        if (result === Core.Shared.AuthorizationResult.Unauthorised) {
                            routerService.routeToPage('unauthorised');
                        }
                        if (result === Core.Shared.AuthorizationResult.LoginRequired) {
                            routerService.routeToPage('login');
                        }
                    }
                });
            }
            RouteAuthorizationService.$inject = ['$rootScope', 'routerService', 'userAuthorizationService'];
            return RouteAuthorizationService;
        }());
        Services.RouteAuthorizationService = RouteAuthorizationService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
