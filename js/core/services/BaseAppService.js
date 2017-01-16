/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var BaseAppService = (function () {
            function BaseAppService(routerService, networkService, appConstant, toaster) {
                this.routerService = routerService;
                this.networkService = networkService;
                this.appConstant = appConstant;
                this.toaster = toaster;
            }
            BaseAppService.$inject = ['routerService', 'networkService', 'appConstant', 'toaster'];
            return BaseAppService;
        }());
        Services.BaseAppService = BaseAppService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
