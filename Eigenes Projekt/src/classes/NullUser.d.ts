namespace SoftwareDesign {

    export class NullUser {
       public _sex: string;

        constructor(_userId: number, _userName: string, _password: string){
            this._userId = _userId;
        }

        public playQuiz(): void;
        public watchStats(): void;
        public signIn(): void;
        public writeUserAfterLogin(): void;
    }
}