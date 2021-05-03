"use strict";
var SoftwareDesign;
(function (SoftwareDesign) {
    class PrivateStats extends SoftwareDesign.Statistic {
        constructor(_privateMatches) {
            super(0, 0, 0);
            this._privateMatches = _privateMatches;
        }
    }
    SoftwareDesign.PrivateStats = PrivateStats;
})(SoftwareDesign || (SoftwareDesign = {}));
//# sourceMappingURL=PrivateStats.js.map