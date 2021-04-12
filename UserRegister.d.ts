namespace SoftwareDesign {
    export class UserRegister extends User {

        private _registerUserId: number;
        public get registerUserId(): number {
            return this._registerUserId
        }
        public set registerUserId(value: number) {
            this._registerUserId = value
        }

        private _quiz: Quiz[];
        public get quiz(): Quiz[] {
            return this._quiz
        }
        public set quiz(value: Quiz[]) {
            this._quiz = value
        }

        constructor(_registerUserId: number, _quiz: Quiz[]);
        public createQuiz(): Quiz;
    }
}
