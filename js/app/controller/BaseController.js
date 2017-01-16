/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var BaseController = (function () {
            function BaseController(appService) {
                this.appService = appService;
            }
            BaseController.prototype.onError = function (httpError) {
                var _this = this;
                // for  token specific error
                if (httpError.error.message) {
                    this.appService.toaster.error(httpError.error.message);
                }
                else if (typeof httpError.error === 'object') {
                    angular.forEach(httpError.error, function (item) {
                        _this.appService.toaster.error(item);
                    });
                }
                else {
                    this.appService.toaster.error(httpError.error);
                }
            };
            return BaseController;
        }());
        Controller.BaseController = BaseController;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
