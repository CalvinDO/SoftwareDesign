namespace SoftwareDesign {
    
    class Stats {
        private _userId: number;
        

        private _playedQuizzes: number;
        private _anweredQuestions: number;
        private _correctAnswers: number;

        constructor (_userId: number, _playedQuizzes: number, _anweredQuestions: number, _correctAnswers: number);

        public getPercentage(correctAnswers, answeredQuestions): number;
    }
}