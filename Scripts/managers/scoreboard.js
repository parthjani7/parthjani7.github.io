var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this._score = 0;
            this.Start();
            this.Score = 0;
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    if (this.HighScore == undefined || this.HighScore < this.Score) {
                        scenes.Setting.stopBackgroundMusic();
                        this.HighScore = this.Score;
                    }
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                if (localStorage.getItem('highscore') == undefined) {
                    return 0;
                }
                return parseInt(localStorage.getItem('highscore'));
            },
            set: function (newValue) {
                this._highScore = newValue;
                localStorage.setItem('highscore', newValue.toString());
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                //this._score=parseInt(localStorage.getItem('highscore'));
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "increaseScore", {
            set: function (newValue) {
                this._score += newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "25px", "Dock51", "#000", config.Screen.WIDTH - 270, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "25px", "Dock51", "#000", config.Screen.WIDTH - 420, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 0", "60px", "Dock51", "#000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map