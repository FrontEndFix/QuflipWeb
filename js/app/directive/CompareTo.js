/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Directive;
    (function (Directive) {
        var CompareTo = (function () {
            function CompareTo() {
                this.require = "ngModel";
                this.scope = {
                    otherModelValue: "=compareTo"
                };
                this.link = function (scope, element, attributes, ngModel) {
                    ngModel.$validators.compareTo = function (modelValue) {
                        return modelValue == scope.otherModelValue;
                    };
                    scope.$watch("otherModelValue", function () {
                        ngModel.$validate();
                    });
                };
            }
            CompareTo.factory = function () {
                var directive = function () {
                    return new CompareTo();
                };
                directive['$inject'] = [''];
                return directive();
            };
            return CompareTo;
        }());
        Directive.CompareTo = CompareTo;
    })(Directive = App.Directive || (App.Directive = {}));
})(App || (App = {}));
