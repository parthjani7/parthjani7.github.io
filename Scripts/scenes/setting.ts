module scenes {
    export class Setting extends objects.Scene {
        private _gameTitle: objects.Label;
				private _soundButton:objects.Button;
        private _background:objects.Background;
        private _soundLable1:objects.Label;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._backButton = new objects.Button("BackButton",config.Screen.WIDTH-config.Screen.WIDTH+50, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);
            this._soundButton = new objects.Button("SoundOffButton", config.Screen.WIDTH/2, 130, true);

            if(Setting.getSound()){
                this._soundButton = new objects.Button("SoundOnButton", config.Screen.WIDTH/2, 130, true);
                Setting.playBackgroundMusic("menu_background");
            }

            this._soundLable1 = new objects.Label("Sound Preference: "+(Setting.getSound()?"ON":"OFF"), "25px", "Consolas", "#000000",(config.Screen.WIDTH/2)-30, 200, true);

            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000",config.Screen.WIDTH/2, 50, true);

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

				public soundToggle():void{
					if(Setting.getSound()){
            Setting.stopBackgroundMusic();
						localStorage.setItem("space_shooter_sound","false");
            this._soundLable1.text="Sound Preference: OFF";
            this._soundButton.changeImage("SoundOffButton");
						return;
					}
					localStorage.setItem("space_shooter_sound","true");
          this._soundButton.changeImage("SoundOnButton");
          this._soundLable1.text="Sound Preference: ON";
          Setting.playBackgroundMusic("menu_background");

				}

				public static getSound():boolean{
					var sound=localStorage.getItem("space_shooter_sound");
					if(sound=="false"){
						return false;
					}
					return true;
				}

        public Main():void {
          this.addChild(this._background);
          this.addChild(this._gameTitle);
          this.addChild(this._soundButton);
          this.addChild(this._soundLable1);
          this.addChild(this._backButton);

          this._backButton.on("click", function(){
            this.backToMenu();
          }, this);

          this._soundButton.on("click", function(){
            this.soundToggle();
            console.log("Sound Setting "+Setting.getSound());
          }, this);
        }
    }
}