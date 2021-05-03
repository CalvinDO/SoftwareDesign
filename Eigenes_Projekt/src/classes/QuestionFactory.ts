namespace SoftwareDesign {
    export class QuestionFactory {
        private static instance: QuestionFactory;

        private constructor() {
            
        }

        public static getInstance(): QuestionFactory {
            if (this.instance == null)
                this.instance = new QuestionFactory();

            return this.instance;
        }


        public createQuestion(_questionType: QuestionType): Question {
            return new Question("", [], QuestionType.number);
        }
    }
}