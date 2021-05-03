"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class Question {
        constructor(_question, _answer, _type) {
            this._question = _question;
            this._answer = _answer;
            this._type = _type;
        }
        readAnswer() {
        }
        polishAnswer() {
        }
    }
    SoftwareDesign.Question = Question;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=Question.js.map