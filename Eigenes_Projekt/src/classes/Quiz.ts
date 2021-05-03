namespace SoftwareDesign {
    export class Quiz {
        public _title: string;
        public _questions: Question[];

        constructor(_title: string, _questions: Question[]) {
            this._title = _title;
            this._questions = _questions;
        }

        public writeStats(): void {

        }
        public createQuestions(): void {

        }
        public finishQuiz(): void {

        }
        public isQuizReady(): boolean {
            return true;
        }
    }
}