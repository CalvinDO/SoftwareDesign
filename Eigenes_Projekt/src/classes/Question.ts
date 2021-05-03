namespace SoftwareDesign {
    export class Question {
        public _question: string;
        public _answer: Answer[];
        public _type: QuestionType;

        constructor(_question: string, _answer: Answer[], _type: QuestionType){
            this._question=_question;
            this._answer=_answer;
            this._type=_type;
        }

        public readAnswer(): void{

        }
        public polishAnswer(): void{
            
        }
    }

}