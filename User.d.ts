namespace SoftwareDesign {

    export class User {
        private userId: number;
        private userName?: String;
        private password?: String;


        public playQuiz(): void;
        public showStats(userId): Stats[];
        public signUp(): void;
        public logIn(): Boolean;
    }
}