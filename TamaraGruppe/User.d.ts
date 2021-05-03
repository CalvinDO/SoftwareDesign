namespace SoftwareDesign {

    export class User {
        private _userId: number;
        public get userId(): number {
            return this._userId;
        }
        public set userId(value: number) {
            this._userId = value;
        }

        private _userName?: string;
        public get userName(): string {
            return this._userName;
        }
        public set userName(value: string) {
            this._userName = value;
        }

        private _password?: string;
        public get password(): string {
            return this._password;
        }
        public set password(value: string) {
            this._password = value;
        }

        constructor(_userId: number, _userName: string, _password: string){
            this._userId = _userId;
        }

        public playQuiz(): void;
        public showStats(userId): Stats[];
        public signUp(): void;
        public logIn(): boolean;
    }
}