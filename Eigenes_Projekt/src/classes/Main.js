System.register(["./ConsoleHandling"], function (exports_1, context_1) {
    "use strict";
    var ConsoleHandling_1, SoftwareDesign;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConsoleHandling_1_1) {
                ConsoleHandling_1 = ConsoleHandling_1_1;
            }
        ],
        execute: function () {
            (function (SoftwareDesign) {
                let accountDB = {};
                getFirstInput();
                async function getFirstInput() {
                    let answer;
                    answer = await ConsoleHandling_1.default.showPossibilities(["Select and play Quiz (Q)", "Sign in (S)", "Register (R)"], "What do you want to do?");
                    console.log(`${answer}`);
                    switch (answer.toUpperCase()) {
                        case "Q":
                            break;
                        case "S":
                            break;
                        case "R":
                            let inputName = await ConsoleHandling_1.default.question("type in username: ");
                            let inputPassword = await ConsoleHandling_1.default.question("type in password: ");
                            accountDB[inputName] = inputPassword;
                            ConsoleHandling_1.default.printInput("congratulations! You got registered!");
                            console.log(JSON.stringify(accountDB));
                            break;
                        default:
                            break;
                    }
                }
            })(SoftwareDesign || (SoftwareDesign = {}));
        }
    };
});
//# sourceMappingURL=Main.js.map