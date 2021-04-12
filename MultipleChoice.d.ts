namespace SoftwareDesign {
    export class MultipleChoice {

        private _options: MultipleChoiceOption[];
        public get options(): MultipleChoiceOption[] {
            return this._options;
        }
        public set options(value: MultipleChoiceOption[]) {
            this._options = value;
        }

        constructor(_options: MultipleChoiceOption[]);


        public addOption(): void
    }
}
