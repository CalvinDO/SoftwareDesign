"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class NullUser {
        constructor(_name, _password) {
            this._name = _name;
            this._password = _password;
        }
        playQuiz() {
        }
        watchStats() {
        }
        signIn() {
        }
        writeUserAfterLogin() {
        }
    }
    SoftwareDesign.NullUser = NullUser;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=NullUser.js.map