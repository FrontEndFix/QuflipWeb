/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Services;
    (function (Services) {
        var UserAuthorizationService = (function () {
            function UserAuthorizationService(storageService, appConstant) {
                this.storageService = storageService;
                this.appConstant = appConstant;
            }
            UserAuthorizationService.prototype.authorize = function (routePermission) {
                var isAuthorised = Core.Shared.AuthorizationResult.Unauthorised;
                var user = this.storageService.getItem(this.appConstant.keys.user, false);
                if (user == null) {
                    return Core.Shared.AuthorizationResult.LoginRequired;
                }
                if (routePermission.permissionType != null
                    && routePermission.permissionType == Core.Shared.RoutePermissionType.OnlyLoginRequired) {
                    return Core.Shared.AuthorizationResult.Success;
                }
                var userRolesLowerCase = new Array();
                angular.forEach(user.roles, function (role) {
                    userRolesLowerCase.push(role.toLowerCase());
                });
                for (var index = 0; index < routePermission.roles.length; index++) {
                    var premission = routePermission.roles[index].toLowerCase();
                    if (routePermission.permissionType === Core.Shared.RoutePermissionType.AtLeastOneRole) {
                        if (userRolesLowerCase.indexOf(premission) > -1) {
                            isAuthorised = Core.Shared.AuthorizationResult.Success;
                            break;
                        }
                    }
                    else if (routePermission.permissionType === Core.Shared.RoutePermissionType.AllRole) {
                        if (userRolesLowerCase.indexOf(premission) == -1) {
                            isAuthorised = Core.Shared.AuthorizationResult.Unauthorised;
                            break;
                        }
                    }
                }
                return isAuthorised;
            };
            UserAuthorizationService.prototype.isUserBelongToRole = function (role) {
                var belongsToRole = false;
                var user = this.storageService.getItem(this.appConstant.keys.user, false);
                if (user != null) {
                    var userRolesLowerCase = new Array();
                    angular.forEach(user.roles, function (role) {
                        userRolesLowerCase.push(role.toLowerCase());
                    });
                    role = role.toLocaleLowerCase();
                    belongsToRole = userRolesLowerCase.indexOf(role) != -1;
                }
                return belongsToRole;
            };
            UserAuthorizationService.$inject = ['storageService', 'appConstant'];
            return UserAuthorizationService;
        }());
        Services.UserAuthorizationService = UserAuthorizationService;
    })(Services = Core.Services || (Core.Services = {}));
})(Core || (Core = {}));
