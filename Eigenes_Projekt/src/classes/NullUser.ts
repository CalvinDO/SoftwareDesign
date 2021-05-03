namespace SoftwareDesign {

    export class NullUser {
        
       public _name: string;
       public _password: string;

        constructor(_name: string, _password: string) {
            this._name = _name;
            this._password = _password;
        }

        public playQuiz(): void {

        }
        public watchStats(): void {

        }
        public signIn(): void {

        }
        public writeUserAfterLogin(): void {
            
        }
    }
}