namespace SoftwareDesign {
    export class Statistic {
        public _playedGames: number;
        public _amountRightAnswers: number;
        public _amountAnswers: number;

        constructor(_playedGames: number, _amountRightAnswers: number, _amountAnswers: number);
        public viewStats(): void;
    }
}