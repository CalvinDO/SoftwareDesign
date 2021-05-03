"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class Statistic {
        constructor(_playedGames, _amountRightAnswers, _amountAnswers) {
            this._playedGames = _playedGames;
            this._amountRightAnswers = _amountRightAnswers;
            this._amountAnswers = _amountAnswers;
        }
        viewStats() {
            console.log("played games: " + this._playedGames + " amount right answers: " + this._amountRightAnswers + " amount answers");
        }
    }
    SoftwareDesign.Statistic = Statistic;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=Statistic.js.map