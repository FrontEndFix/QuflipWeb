/// <reference path="../../typings/app.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    'use strict';
    (function () {
        var dependencies = ['app.core', 'ngRoute', 'toaster', 'ngAnimate', 'ui.bootstrap', 'angular-input-stars'];
        angular.module('app', dependencies)
            .controller('homeController', App.Controller.HomeController)
            .controller('listController', App.Controller.ListController)
            .controller('cartController', App.Controller.CartController)
            .directive("compareTo", App.Directive.CompareTo.factory)
            .config(App.RouteConfig);
    })();
})(App || (App = {}));
