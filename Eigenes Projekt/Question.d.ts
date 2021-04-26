namespace SoftwareDesign {
    export class Question {
        public _question: string;
        public _answer: Answer[];
        public _type: QuestionType;

        constructor(_question: string, _answer: Answer[], _type: QuestionType);

        public readAnswer(): void
        public pollishAnswer(): void

    }

}