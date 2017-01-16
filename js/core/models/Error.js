/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var Core;
(function (Core) {
    var Models;
    (function (Models) {
        var HttpError = (function () {
            function HttpError(error, errorCode) {
                this.error = error;
                this.errorCode = errorCode;
            }
            return HttpError;
        }());
        Models.HttpError = HttpError;
    })(Models = Core.Models || (Core.Models = {}));
})(Core || (Core = {}));
