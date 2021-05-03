namespace SoftwareDesign {

    export class NullUser {
        
       public _name: string;
       public _password: string;

        constructor(_name: string, _password: string);

        public playQuiz(): void;
        public watchStats(): void;
        public signIn(): void;
        public writeUserAfterLogin(): void;
    }
}