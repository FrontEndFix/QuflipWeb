/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Models;
    (function (Models) {
        var LoggedInUserInfo = (function () {
            function LoggedInUserInfo(firstName, lastName, emailId, roles) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.emailId = emailId;
                this.roles = roles;
            }
            return LoggedInUserInfo;
        }());
        Models.LoggedInUserInfo = LoggedInUserInfo;
        var UserInfo = (function () {
            function UserInfo(username, password, grant_type) {
                if (grant_type === void 0) { grant_type = "password"; }
                this.username = username;
                this.password = password;
                this.grant_type = grant_type;
            }
            return UserInfo;
        }());
        Models.UserInfo = UserInfo;
    })(Models = Core.Models || (Core.Models = {}));
})(Core || (Core = {}));
