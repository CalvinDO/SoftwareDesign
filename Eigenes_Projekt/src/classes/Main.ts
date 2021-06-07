import { Console } from "node:console";
import ConsoleHandling from "./ConsoleHandling";
import { RegisteredUser } from "./RegisteredUser";

interface AccountDictonary {
    [index: string]: RegisteredUser;
}

let accountDB: AccountDictonary = {}

main();

async function main(): Promise<void> {
    while (true) {
        await getFirstInput();
    }
}

async function getFirstInput(): Promise<void> {
    let answer: string;
    answer = await ConsoleHandling.showPossibilities(["Select and play Quiz (Q)", "Sign in (S)", "Register (R)"], "What do you want to do?");
    console.log(`${answer}`);

    switch (answer.toUpperCase()) {
        case "Q":
            break;
        case "S":
            break;
        case "R":
            let inputName: string = await ConsoleHandling.question("type in username: ");
            let inputPassword: string = await ConsoleHandling.question("type in password: ");

            accountDB[inputName] = new RegisteredUser(inputName, inputPassword);


            ConsoleHandling.printInput("congratulations! You got registered!")


            console.log(JSON.stringify(accountDB));
            break;
        default:
            return;
    }
}
