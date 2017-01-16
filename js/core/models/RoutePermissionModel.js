/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Models;
    (function (Models) {
        var RoutePermission = (function () {
            function RoutePermission(roles, permissionType) {
                this.roles = roles;
                this.permissionType = permissionType;
            }
            RoutePermission.factory = function (roles, permissionType) {
                return new RoutePermission(roles, permissionType);
            };
            return RoutePermission;
        }());
        Models.RoutePermission = RoutePermission;
    })(Models = Core.Models || (Core.Models = {}));
})(Core || (Core = {}));
