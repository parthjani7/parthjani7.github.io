module scenes {
    export class End extends objects.Scene {
        // member variables
        private _endLabel: objects.Label;
        private _highScore: objects.Label;
        private _currentScore: objects.Label;
        private _background:objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#f00", config.Screen.HALF_WIDTH, 180, true);
            this._highScore = new objects.Label("Hight Score: "+managers.Game.ScoreBoard.HighScore, "60px", "Consolas", "#000", config.Screen.HALF_WIDTH, 260, true);
            this._currentScore = new objects.Label("Your Score: "+managers.Game.ScoreBoard.Score, "40px", "Consolas", "#000", config.Screen.HALF_WIDTH, 330, true);
            //Backbutton
            this._backButton = new objects.Button("BackButton",config.Screen.WIDTH-config.Screen.WIDTH+50, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);
            this._background = new objects.Background();
            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - END SCENE");
            this.addChild(this._background);
            this.addChild(this._endLabel);
            this.addChild(this._highScore);
            this.addChild(this._currentScore);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                this.backToMenu();
            }, this);
        }
    }
}