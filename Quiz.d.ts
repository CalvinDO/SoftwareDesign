namespace SoftwareDesign {
    export class Quiz {

        private public: Boolean
        private title: String
        private questions: Question[]
        private userId: number

        public addQuestion(): void
        public finishQuiz(): void
    }
}
