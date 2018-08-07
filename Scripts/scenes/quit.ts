module scenes {
    export class Quit extends objects.Scene {
				private _thankTitle: objects.Label;
        private _background:objects.Background;
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // public methods
        public Start():void {
						this._thankTitle = new objects.Label("Thank you for playing "+config.Game.NAME, "40px", "Consolas", "#000000",config.Screen.WIDTH/2, 150, true);
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
            console.log("Started - Quit SCENE");
            // add the Background object to the scene
            this.addChild(this._background);
            this.addChild(this._thankTitle);
        }
    }
}