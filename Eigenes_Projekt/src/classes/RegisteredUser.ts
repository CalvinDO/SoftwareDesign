import { User } from "./User";
import { Quiz } from "./Quiz";

export class RegisteredUser extends User {

    public _name: string;
    public _password: string;

    constructor(_name: string, _password: string) {
        super();
        this._name = _name;
        this._password = _password;
    }

    public createQuiz(): Quiz {
        let createdQuiz: Quiz = new Quiz("", []);

        return createdQuiz;
    }

    public signIn(): void {

    }
}

