namespace SoftwareDesign {
    export class PrivateStats extends Statistic {
        public _privateMatches: number;

        constructor(_privateMatches: number) {
            super(0, 0, 0);
            this._privateMatches = _privateMatches;
        }
    }
}