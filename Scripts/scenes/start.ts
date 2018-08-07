module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _gameTitle: objects.Label;
        private _playButton: objects.Button;
        private _settingButton: objects.Button;
        private _instructionButton: objects.Button;
        private _characterButton: objects.Button;
        private _aboutButton: objects.Button;
        private _exitButton: objects.Button;
        private _background:objects.Background;

        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
          this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000",config.Screen.WIDTH/2, 50, true);

          this._playButton = new objects.Button("PlayButton", config.Screen.WIDTH/2, 230, true);

          this._settingButton = new objects.Button("SettingButton", config.Screen.WIDTH-config.Screen.WIDTH+80, config.Screen.HEIGHT-40, true);

          this._instructionButton = new objects.Button("InstructionButton", config.Screen.WIDTH-config.Screen.WIDTH+150, config.Screen.HEIGHT-40, true);

          this._characterButton = new objects.Button("CharacterButton", config.Screen.WIDTH-config.Screen.WIDTH+220, config.Screen.HEIGHT-40, true);

          this._aboutButton = new objects.Button("AboutButton", config.Screen.WIDTH-150, config.Screen.HEIGHT-40, true);

          this._exitButton = new objects.Button("ExitButton", config.Screen.WIDTH-80, config.Screen.HEIGHT-40, true);

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

            console.log("Started - START SCENE");
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            this.addChild(this._playButton);
            this.addChild(this._settingButton);
             this.addChild(this._instructionButton);
             this.addChild(this._aboutButton);
             this.addChild(this._exitButton);
             this.addChild(this._characterButton);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._settingButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.SETTING;
            }, this);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);

            this._aboutButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.ABOUT;
            }, this);

            this._exitButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.QUIT;
            }, this);

            this._characterButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.CHARACTER;
            }, this);

        }


    }
}