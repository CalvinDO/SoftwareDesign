import { User } from "./User";
import { Quiz } from "./Quiz";
import ConsoleHandling from "./ConsoleHandling";

export class RegisteredUser extends User {

    public name: string;
    public password: string;

    constructor(_name: string, _password: string) {
        super();
        this.name = _name;
        this.password = _password;

        this.getFirstInput();

    }

    public async getFirstInput(): Promise<void> {
        console.log("hello whats up u can continue here")
        let answer = await ConsoleHandling.showPossibilities(["asldfjlasjdlkfjlasdlkfjlsjdlkfjlksjdlkfjlsdf"], "What do you want to do?");
        console.log(answer)
    }


    public createQuiz(): Quiz {
        let createdQuiz: Quiz = new Quiz("", []);

        return createdQuiz;
    }

    public signIn(): void {

    }
}

