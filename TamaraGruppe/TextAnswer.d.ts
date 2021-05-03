namespace SoftwareDesign {
    export class TextAnswer {

        private _answer: string;
        public get answer(): string {
            return this._answer;
        }
        public set answer(value: string) {
            this._answer = value;
        }

        constructor(_answer: string);
    }
}
