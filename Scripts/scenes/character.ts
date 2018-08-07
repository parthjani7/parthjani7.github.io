module scenes {
    export class Character extends objects.Scene {
        // member variables
        private _gameTitle: objects.Label;
        private _current: objects.Label;
        private _characters:objects.Button[];
        private _mainCharacter:createjs.Bitmap;
        private _background:objects.Background;

        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._gameTitle = new objects.Label("Click on Bird of your choice", "40px", "Consolas", "#000000",config.Screen.WIDTH/2, 50, true);
            
            this._mainCharacter=new createjs.Bitmap(managers.Game.AssetManager.getResult(objects.Bird.getBird()));
            this._mainCharacter.x=config.Screen.HALF_WIDTH;
            this._mainCharacter.y=config.Screen.HALF_HEIGHT+70;

            this._gameTitle = new objects.Label("Current Player", "35px", "Consolas", "#000000",config.Screen.HALF_WIDTH+30, this._mainCharacter.y+90, true);
            
            this._backButton = new objects.Button("BackButton",config.Screen.WIDTH-config.Screen.WIDTH+50, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);
            this._background = new objects.Background();
            this._characters = new Array<objects.Button>();
            this._initCharacters(6);
            this.Main();
        }

        private _initCharacters(charactersNum):void {
            for (let count = 1; count <= charactersNum; count++) {
                this._characters.push(new objects.Button(
                    "bird"+(count),
                    (config.Screen.HALF_WIDTH-450)+(count*130), config.Screen.HALF_HEIGHT-50, true));
            }
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
            console.log("Started - START SCENE");
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            
            for (const character of this._characters) {
                this.addChild(character);
                character.on("click", function(){
                    objects.Bird.setBird(character.name);
                    this._mainCharacter.image=managers.Game.AssetManager.getResult(character.name);
                }, this);
            }
            this.addChild(this._mainCharacter);

            this.addChild(this._backButton);
            
            this._backButton.on("click", function(){
                this.backToMenu();
            }, this);
        }

        

    }
}