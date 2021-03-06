namespace SoftwareDesign {    
    export class Stats {
        private _userId: number;
        public get userId(): number {
            return this._userId;
        }
        public set userId(): number {
            this._userId = value;
        }


        private _playedQuizzes: number;
        public get playedQuizzes(): number {
            return this._playedQuizzes;
        }
        public set playedQuizzes(): number {
            this._playedQuizzes = value;
        }


        private _answeredQuestions: number;
        public get answeredQuestions(): number {
            return this._answeredQuestions;
        }
        public set answeredQuestions(): number {
            this._answeredQuestions = value;
        }


        private _correctAnswers: number;
        public get correctAnswers(): number {
            return this._correctAnswers;
        }
        public set correctAnswers(): number {
            this._correctAnswers = value;
        }

        constructor (_userId: number, _playedQuizzes: number, _anweredQuestions: number, _correctAnswers: number);

        public getPercentage(_correctAnswers, _answeredQuestions): number;
    }
}