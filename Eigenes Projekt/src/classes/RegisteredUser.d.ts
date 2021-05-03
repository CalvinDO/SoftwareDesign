namespace SoftwareDesign {

    export class RegisteredUser extends User {

        public _name: string;
        public _password: string;

        constructor(_name: string, _password: string);
        
        public createQuiz(): Quiz;
        public signIn(): void;
    }
}
