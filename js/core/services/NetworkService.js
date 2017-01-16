/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var NetworkService = (function () {
            function NetworkService($http, $log, $q, appConstant, storageService) {
                this.$http = $http;
                this.$log = $log;
                this.$q = $q;
                this.appConstant = appConstant;
                this.storageService = storageService;
            }
            NetworkService.prototype.onError = function (error) {
                // generic handling for all error, including authorization realted stuff
                this.$log.error(error);
            };
            NetworkService.prototype.getConfig = function (url, config) {
                var httpConfig = {};
                if (config != null) {
                    angular.extend(httpConfig, config);
                }
                var token = this.storageService.getItem(this.appConstant.keys.token, false);
                if (token != null) {
                    var tokenHeader = {
                        'Authorization': "Bearer " + token
                    };
                    var currentHeaders = httpConfig.headers;
                    if (currentHeaders) {
                        httpConfig.headers = angular.extend(currentHeaders, tokenHeader);
                    }
                    else {
                        httpConfig.headers = tokenHeader;
                    }
                }
                httpConfig.url = url;
                return httpConfig;
            };
            NetworkService.prototype.getOrDelete = function (url, methodType, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = methodType;
                return this.getResponse(httpConfig);
            };
            NetworkService.prototype.getResponse = function (config) {
                var _this = this;
                var deferred = this.$q.defer();
                config.headers;
                this.$http(config).success(function (result) {
                    deferred.resolve(result);
                }).error(function (error, errorCode) {
                    _this.onError(error);
                    deferred.reject(new Core.Models.HttpError(error, errorCode));
                });
                return deferred.promise;
            };
            NetworkService.prototype.get = function (url, data, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = "GET";
                if (data) {
                    httpConfig.params = data;
                }
                return this.getResponse(httpConfig);
            };
            NetworkService.prototype.delete = function (url, data, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = "DELETE";
                if (data) {
                    httpConfig.params = data;
                }
                return this.getResponse(httpConfig);
            };
            NetworkService.prototype.post = function (url, data, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = "POST";
                httpConfig.data = data;
                return this.getResponse(httpConfig);
            };
            NetworkService.prototype.put = function (url, data, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = "PUT";
                httpConfig.data = data;
                return this.getResponse(httpConfig);
            };
            NetworkService.prototype.patch = function (url, data, config) {
                var httpConfig = this.getConfig(url, config);
                httpConfig.method = "PATCH";
                httpConfig.data = data;
                return this.getResponse(httpConfig);
            };
            NetworkService.$inject = ['$http', '$log', '$q', 'appConstant', 'storageService'];
            return NetworkService;
        }());
        Services.NetworkService = NetworkService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
