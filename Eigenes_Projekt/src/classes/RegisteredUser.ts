namespace SoftwareDesign {

    export class RegisteredUser extends User {

        public _name: string;
        public _password: string;

        constructor(_name: string, _password: string) {
            super();
            this._name = _name;
            this._password = _password;
        }

        public createQuiz(): Quiz {
            let createdQuiz: Quiz;

            return createdQuiz;
        }

        public signIn(): void {

        }
    }
}
