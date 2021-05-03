namespace SoftwareDesign {

    export class User {
       public _sex: string;
       public _userId: string;

        constructor(_userId: number, _userName: string, _password: string){
            this._sex = _sex;
            this._userId = _userId;
        }

        public playQuiz(): void;
        public watchStats(): void;
        public signIn(): void;
        public writeUserAfterLogin(): void;
    }
}