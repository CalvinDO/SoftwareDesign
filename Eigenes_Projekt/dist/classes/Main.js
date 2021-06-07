"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleHandling_1 = __importDefault(require("./ConsoleHandling"));
var SoftwareDesign;
(function (SoftwareDesign) {
    let accountDB = {};
    getFirstInput();
    function getFirstInput() {
        return __awaiter(this, void 0, void 0, function* () {
            let answer;
            answer = yield ConsoleHandling_1.default.showPossibilities(["Select and play Quiz (Q)", "Sign in (S)", "Register (R)"], "What do you want to do?");
            console.log(`${answer}`);
            switch (answer.toUpperCase()) {
                case "Q":
                    break;
                case "S":
                    break;
                case "R":
                    let inputName = yield ConsoleHandling_1.default.question("type in username: ");
                    let inputPassword = yield ConsoleHandling_1.default.question("type in password: ");
                    accountDB[inputName] = inputPassword;
                    ConsoleHandling_1.default.printInput("congratulations! You got registered!");
                    console.log(JSON.stringify(accountDB));
                    break;
                default:
                    break;
            }
        });
    }
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=Main.js.map