namespace SoftwareDesign {
    export class MultipleChoiceOption {

        private _option: string
        public get option(): string {
            return this._option
        }
        public set option(value: string) {
            this._option = value
        }
        private _correct: boolean
        public get correct(): boolean {
            return this._correct
        }
        public set correct(value: boolean) {
            this._correct = value
        }

        constructor(_option: string, _correct: QuestionType);
    }
}
