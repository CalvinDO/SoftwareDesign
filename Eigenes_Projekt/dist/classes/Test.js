"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    lol() {
        return "";
    }
    static getInstance() {
        return this.instance;
    }
}
Test.instance = new Test();
exports.default = Test.getInstance();
//# sourceMappingURL=Test.js.map