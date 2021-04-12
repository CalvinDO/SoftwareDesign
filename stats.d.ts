namespace SoftwareDesign {
    
    class Stats {
        private userId: number;
        private playedQuizzes: number;
        private anweredQuestions: number;
        private correctAnswers: number;

        public getPercentage(correctAnswers, answeredQuestions): number;
    }
}