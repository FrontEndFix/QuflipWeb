/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var AppEventBusService = (function () {
            function AppEventBusService($rootScope) {
                this.$rootScope = $rootScope;
            }
            AppEventBusService.prototype.subscribe = function (eventName, callback) {
                return this.$rootScope.$on(eventName, callback);
            };
            AppEventBusService.prototype.broadcast = function (eventName, data) {
                this.$rootScope.$emit(eventName, data);
            };
            AppEventBusService.$inject = ['$rootScope'];
            return AppEventBusService;
        }());
        Services.AppEventBusService = AppEventBusService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
