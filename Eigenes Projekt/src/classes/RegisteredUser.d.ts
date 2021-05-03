namespace SoftwareDesign {

    export class RegisteredUser extends User {

        public name: string;
        public password: string;

        constructor(_registerUserId: number, _quiz: Quiz[]);
        public createQuiz(): Quiz;
        public signIn(): void;
    }
}
