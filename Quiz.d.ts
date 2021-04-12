namespace SoftwareDesign {
    export class Quiz {

      
        private _public: boolean
        public get public(): boolean {
            return this._public
        }
        public set public(value: boolean) {
            this._public = value
        }

        private _title: string
        public get title(): string {
            return this._title
        }
        public set title(value: string) {
            this._title = value
        }


        private _questions: Question[]
        public get questions(): Question[] {
            return this._questions
        }
        public set questions(value: Question[]) {
            this._questions = value
        }


        private _userId: number
        public get userId(): number {
            return this._userId
        }
        public set userId(value: number) {
            this._userId = value
        }

        //---------------------------------------------------
        //------------------METHODS--------------------------
        //---------------------------------------------------

        public addQuestion(): void
        public finishQuiz(): void
    }
}
