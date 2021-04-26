namespace SoftwareDesign {
    export class QuestionFactory {
        private _playedGames: number;
        public get playedGames(): number {
            return this._playedGames;
        }
        public set playedGames(value: number) {
            this._playedGames = value;
        }
        private _amountRightAnswers: number;
        public get amountRightAnswers(): number {
            return this._amountRightAnswers;
        }
        public set amountRightAnswers(value: number) {
            this._amountRightAnswers = value;
        }
        private _amountAnswers: number;
        public get amountAnswers(): number {
            return this._amountAnswers;
        }
        public set amountAnswers(value: number) {
            this._amountAnswers = value;
        }

        constructor(_playedGames: number, _amountRightAnswers: number, _amountAnswers: number);
        public viewStats(): void;
    }
}