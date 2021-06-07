export class Statistic {
    public _playedGames: number;
    public _amountRightAnswers: number;
    public _amountAnswers: number;

    constructor(_playedGames: number, _amountRightAnswers: number, _amountAnswers: number) {
        this._playedGames = _playedGames;
        this._amountRightAnswers = _amountRightAnswers;
        this._amountAnswers = _amountAnswers;
    }

    public viewStats(): void {
        console.log("played games: " + this._playedGames + " amount right answers: " + this._amountRightAnswers + " amount answers");
    }
}