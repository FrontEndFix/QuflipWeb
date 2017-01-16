/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var StorageService = (function () {
            function StorageService() {
                this.storageTypeObj = localStorage;
                this.isSession = false;
            }
            StorageService.prototype.getItem = function (key, fromLocal) {
                if (fromLocal === void 0) { fromLocal = true; }
                var store = fromLocal ? localStorage : sessionStorage;
                return JSON.parse(store.getItem(key));
            };
            StorageService.prototype.setItem = function (key, value, toLocal) {
                if (toLocal === void 0) { toLocal = true; }
                var store = toLocal ? localStorage : sessionStorage;
                store.setItem(key, JSON.stringify(value));
            };
            StorageService.prototype.removeItem = function (key, fromLocal) {
                if (fromLocal === void 0) { fromLocal = true; }
                var store = fromLocal ? localStorage : sessionStorage;
                store.removeItem(key);
            };
            StorageService.prototype.clearAll = function (toLocal) {
                if (toLocal === void 0) { toLocal = true; }
                var store = toLocal ? localStorage : sessionStorage;
                store.clear();
            };
            return StorageService;
        }());
        Services.StorageService = StorageService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
