/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var ViewService = (function () {
            function ViewService(storageService) {
                this.storageService = storageService;
                this.key = "activeView";
            }
            ViewService.prototype.getActiveView = function () {
                var activeViewSt = this.storageService.getItem(this.key);
                if (activeViewSt) {
                    this.activeView = activeViewSt;
                }
                return this.activeView;
            };
            ViewService.prototype.setActiveView = function (viewName) {
                this.activeView = viewName;
                this.storageService.setItem(this.key, viewName);
            };
            ViewService.$inject = ['storageService'];
            return ViewService;
        }());
        Services.ViewService = ViewService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
