import { Console } from "node:console";
import { debug } from "webpack";
import ConsoleHandling from "./ConsoleHandling";
import FileHandler from "./FileHandler";
import { RegisteredUser } from "./RegisteredUser";

interface AccountDictonary {
    [index: number]: RegisteredUser;
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
    answer = await ConsoleHandling.showPossibilities(["Select and play Quiz (Q)", "Sign in (S)", "Register (R)",  "Print saccout (P)"], "What do you want to do?");
    console.log();
    console.log(`${answer}`);
    console.log();

    switch (answer.toUpperCase()) {
        case "P":
            FileHandler.writeFile("accountDB.json", accountDB);


            break;
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
    if (!dbContains(_name) || !(accountDB[getId(_name)].password == _password)) {
        console.log();
        console.log("Username and / or password is invalid!");
        return;
    }
    
    console.log();
    console.log(`Hello ${_name}! Welcome back :)`);
}


function register(_name: string, _password: string): void {
    
    
    if (dbContains(_name)) {
        console.log();
        console.log("Username already exists!");
        return;
    }
    
    let regexp: RegExp = new RegExp("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$");
    if (regexp.test(_name)){
        accountDB[count()] = new RegisteredUser(_name, _password);

        console.log("you got registered!");


    } else{
       console.log("Username not valid!");
    }

}

function getId(_name: string): number{
    for (let id in accountDB){
        if (accountDB[id].name == _name){
            return +id;
        }
    }
}

function count(): number{
    let index: number = 0;
    for (let id in accountDB){
        index++;
    }

    return index;
}

function dbContains(_name: string): boolean{
   for (let id in accountDB){
       if (accountDB[id].name == _name){
           return true;
       }
       console.log(id);
   }
   return false;
}