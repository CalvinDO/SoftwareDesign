namespace SoftwareDesign {
    export class NumberAnswer {

        private _answer: number;
        public get answer(): number {
            return this._answer;
        }
        public set answer(value: number) {
            this._answer = value;
        }

        constructor(_answer: number);
    }
}
