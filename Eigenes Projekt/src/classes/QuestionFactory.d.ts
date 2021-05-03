namespace SoftwareDesign {
    export class QuestionFactory {
        private static instance: Singleton;

        private constructor();
        
        public static getInstance(): Singleton; 


        public createQuestion(_questionType: QuestionType): Question;
    }
}