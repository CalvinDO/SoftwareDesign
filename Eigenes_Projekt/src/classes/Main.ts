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
    console.log();
    console.log(`${answer}`);
    console.log();

    switch (answer.toUpperCase()) {
        case "Q":
            break;
        case "S":
            console.log("You chose to Sign in!");
            console.log();

            signIn(await ConsoleHandling.question("type in username: "), await ConsoleHandling.question("type in password: "));
            
            break;
        case "R":
            console.log("You chose to Register!");
            console.log();

            register(await ConsoleHandling.question("type in username: "), await ConsoleHandling.question("type in password: "));

            break;
        default:
            console.log();
            console.log("invalid input!");
            return;
    }
}

function signIn(_name: string, _password: string): void {
    if (!accountDB[_name] || !(accountDB[_name]._password == _password)) {
        console.log();
        console.log("Username and / or password is invalid!");
        return;
    }
    console.log();
    console.log(`Hello ${_name}! Welcome back :)`);
}

function register(_name: string, _password: string): void {
    if (accountDB[_name]) {
        console.log();
        console.log("Username already exists!");
        return;
    }
    accountDB[_name] = new RegisteredUser(_name, _password);
    console.log(JSON.stringify(accountDB));
}