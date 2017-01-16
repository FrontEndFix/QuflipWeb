var Core;
(function (Core) {
    var Shared;
    (function (Shared) {
        (function (Role) {
            Role[Role["Admin"] = 1] = "Admin";
            Role[Role["User"] = 2] = "User";
        })(Shared.Role || (Shared.Role = {}));
        var Role = Shared.Role;
        (function (RoutePermissionType) {
            RoutePermissionType[RoutePermissionType["AtLeastOneRole"] = 1] = "AtLeastOneRole";
            RoutePermissionType[RoutePermissionType["AllRole"] = 2] = "AllRole";
            RoutePermissionType[RoutePermissionType["OnlyLoginRequired"] = 3] = "OnlyLoginRequired";
        })(Shared.RoutePermissionType || (Shared.RoutePermissionType = {}));
        var RoutePermissionType = Shared.RoutePermissionType;
        (function (AuthorizationResult) {
            AuthorizationResult[AuthorizationResult["Success"] = 1] = "Success";
            AuthorizationResult[AuthorizationResult["LoginRequired"] = 2] = "LoginRequired";
            AuthorizationResult[AuthorizationResult["Unauthorised"] = 3] = "Unauthorised";
        })(Shared.AuthorizationResult || (Shared.AuthorizationResult = {}));
        var AuthorizationResult = Shared.AuthorizationResult;
        var Appkeys = (function () {
            function Appkeys() {
                this.user = "userInfo";
                this.token = "accessToken";
            }
            return Appkeys;
        }());
        Shared.Appkeys = Appkeys;
        var APP_URL = (function () {
            function APP_URL() {
                this.baseUrl = "http://localhost:59804/";
                this.login = this.baseUrl + "token";
                this.confirmEmail = this.baseUrl + "account/ConfirmEmailAndSetPassword";
                this.resetPassword = this.baseUrl + "Password/ResetPassword";
                this.sendForgotPasswordMail = this.baseUrl + "Password/SendForgotPasswordMail";
            }
            return APP_URL;
        }());
        Shared.APP_URL = APP_URL;
        var AppEvents = (function () {
            function AppEvents() {
                this.onLoginFailed = "login-failed";
                this.onLoginSuccess = "login-success";
                this.onLogOut = "log-out";
            }
            return AppEvents;
        }());
        Shared.AppEvents = AppEvents;
        var AppConstants = (function () {
            function AppConstants() {
                this.appName = "My App";
                this.appVersion = 2;
                this.appUrls = new APP_URL();
                this.keys = new Appkeys();
                this.addAuthorizationHeader = true;
                this.isOTPEnabled = true;
                this.appEvants = new AppEvents();
            }
            AppConstants.factory = function () {
                return new AppConstants();
            };
            return AppConstants;
        }());
        Shared.AppConstants = AppConstants;
    })(Shared = Core.Shared || (Core.Shared = {}));
})(Core || (Core = {}));
