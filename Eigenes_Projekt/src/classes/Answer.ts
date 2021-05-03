namespace SoftwareDesign {
    export class Answer {
        public _answer: string;
        public _isCorrect: boolean;

        constructor(_answer: string, _isCorrect: boolean){
            this._answer=_answer;
            this._isCorrect=_isCorrect;
        };

    }
}