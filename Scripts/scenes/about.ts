module scenes {
    export class About extends objects.Scene {
				private _gameTitle: objects.Label;
        private _background:objects.Background;
        private _about:objects.Label;
        private _about2:objects.Label;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // public methods
        public Start():void {
            Setting.playBackgroundMusic("menu_background");
            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", config.Screen.WIDTH/2, 50, true);

            this._about = new objects.Label(
              "Game version: "+config.Game.VERSION+
              "\n\nDeveloped By:\n\n"+
              "Parth Jani - 300984336\n"+
              "Sanketkumar Vagadiya - 300991500\n"+
              "Pankaj Talwar - 300986202\n"+
              "\n\Guided By: "+config.Game.GUIDE
              , "25px", "Consolas", "#f00", config.Screen.WIDTH/2, config.Screen.HEIGHT/2, true);
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
            console.log("Started - About SCENE");
            this.addChild(this._background,this._gameTitle,this._about,this._about2,this._backButton);

            this._backButton.on("click", function(){
                this.backToMenu();
            }, this);

        }
    }
}