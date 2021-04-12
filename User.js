"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class User {
        get userId() {
            return this._userId;
        }
        set userId(value) {
            this._userId = value;
        }
        get userName() {
            return this._userName;
        }
        set userName(value) {
            this._userName = value;
        }
        get password() {
            return this._password;
        }
        set password(value) {
            this._password = value;
        }
    }
    SoftwareDesign.User = User;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=User.js.map