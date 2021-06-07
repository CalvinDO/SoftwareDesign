"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class RegisteredUser extends SoftwareDesign.User {
        constructor(_name, _password) {
            super();
            this._name = _name;
            this._password = _password;
        }
        createQuiz() {
            let createdQuiz = new SoftwareDesign.Quiz("", []);
            return createdQuiz;
        }
        signIn() {
        }
    }
    SoftwareDesign.RegisteredUser = RegisteredUser;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=RegisteredUser.js.map