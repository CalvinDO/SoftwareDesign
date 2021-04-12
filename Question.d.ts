namespace SoftwareDesign {
    export class Question {

        private _question: string;
        public get question(): string {
            return this._question;
        }
        public set question(value: string) {
            this._question = value;
        }


        private _type: QuestionType;
        public get type(): QuestionType {
            return this._type;
        }
        public set type(value: QuestionType) {
            this._type = value;
        }

        constructor(_question: string, _type: QuestionType);
    }
}
