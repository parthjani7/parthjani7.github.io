module managers {
    export class ScoreBoard {
        // private member variables
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel:objects.Label;

        // public properties

        /**
         * This returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * This returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * This returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }


        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            if(this._lives <= 0) {
                if(this.HighScore==undefined || this.HighScore < this.Score)
                    this.HighScore=this.Score;
                managers.Game.CurrentState = config.Scene.END;
            }
            else {
                this.LivesLabel.text = "Lives: " + this._lives;
            }
        }

        get HighScore():number {
            return parseInt(localStorage.getItem('highscore'));
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            localStorage.setItem('highscore',newValue.toString());
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
            if(this._score > this.HighScore) {
                this.HighScore = this._score;
            }
        }

        
        // constructors
        constructor() {
            this.Start();
        }

        // private methods

        // public methods
        public Start() {
            this._livesLabel = new objects.Label("Lives: 99", "25px", "Dock51", "#000", config.Screen.WIDTH-270,20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "25px", "Dock51", "#000", config.Screen.WIDTH-420,20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Dock51", "#000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.Reset();
        }

        public Reset() {
            console.info("game reset");
            this.Lives = 5;
            this.Score = 0;
        }
    }
}