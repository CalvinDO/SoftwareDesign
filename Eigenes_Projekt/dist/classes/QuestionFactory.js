"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class QuestionFactory {
        constructor() {
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new QuestionFactory();
            return this.instance;
        }
        createQuestion(_questionType) {
            return new SoftwareDesign.Question("", [], SoftwareDesign.QuestionType.number);
        }
    }
    SoftwareDesign.QuestionFactory = QuestionFactory;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=QuestionFactory.js.map