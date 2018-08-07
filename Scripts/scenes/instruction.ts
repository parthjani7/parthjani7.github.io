module scenes {
    export class Instruction extends objects.Scene {
				private _gameTitle: objects.Label;
        private _background:objects.Background;
        private _instruction: objects.Label;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // public methods
        public Start():void {
						this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", (config.Screen.WIDTH/2), 50, true);
						this._instruction = new objects.Label(
              config.Game.NAME+" is a 2D game, where player can move the bird to save it from tank attacks.\nMoreover Bird can shoot bombs on tanks by pressing space bar to destroy them.\nHitting bombs on tanks will add points to the wallet."
              , "22px", "Consolas", "#000000",(config.Screen.WIDTH/2)-30, 200, true);
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
            if(Setting.getSound()){
                Setting.playBackgroundMusic("menu_background");
            }
            console.log("Started - Instruction SCENE");
            this.addChild(this._background);
            // add the Background object to the scene
            this.addChild(this._instruction);
            this.addChild(this._gameTitle);
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                this.backToMenu();
            }, this);

        }
    }
}