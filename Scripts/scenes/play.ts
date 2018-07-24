module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _bird:objects.Bird;
        private _background:objects.Background;
        private _tanks:objects.Tank[];
        private _pauseButton:objects.Button;

        private _isPaused;

        // constructors
        constructor() {
            super();
            this._isPaused=false;
            window.onkeydown = this.keydown;
            this.Start();
        }


        // private KeyUp(event):void {
        //   console.info("clicked up");
        //   //var keyCode =  event.keyCode;
        // }
        // private KeyDown(event):void {
        //   console.info("clicked down");
        // }

        // private methods
        private _buildTanks(tankNum):void {
            for (let count = 0; count < tankNum; count++) {
                this._tanks.push(new objects.Tank());
            }
        }

        // public methods
        public Start():void {

            this._bird = new objects.Bird();
            //this._bird.scaleX="0.3";
            this._background = new objects.Background();
            //this._tanks = new objects.Tank();

            //Backbutton
            this._backButton = new objects.Button("BackButton",config.Screen.WIDTH-50, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);

            this._pauseButton = new objects.Button("PauseButton",config.Screen.WIDTH-120, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);

            // create an empty Array List-like object of clouds
            this._tanks = new Array<objects.Tank>();

            this._buildTanks(3);

            this.Main();
        }

        public Update():void {
          if(!this._isPaused){
            this._bird.Update();
            this._background.Update();

            this._tanks.forEach(tank => {
                tank.Update();
                if(managers.Collision.check(tank,this._bird)){
                  console.info("collision");
                  this._isPaused=true;
                }
            });
          }
        }

        public isPaused(){
          return this._isPaused;
        }

        public Pause():void {
          this._isPaused=!this._isPaused;
          if(this.isPaused()){
            this._pauseButton.changeImage("PlayButton");
            return;
          }
          this._pauseButton.changeImage("PauseButton");
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");

            // add the Background object to the scene
            this.addChild(this._background);
            this.addChild(this._backButton);
            this.addChild(this._pauseButton);

            this._backButton.on("click", function(){
                this.backToMenu();
            }, this);

            this._pauseButton.on("click", function(){
                this.Pause();
            }, this);


            // window.addEventListener('keydown', function(event) {
            //
            //   // switch(event.keyCode){
            //   //   case 38:
            //   //     this._bird.moveDown();
            //   //     break;
            //   //   case 40:
            //   //     this._bird.moveDown();
            //   //     break;
            //   // }
            // }, this);



            // add the Bird object to the scene
            this.addChild(this._bird);

            // add the Cloud(s) to the scene
            for (const tank of this._tanks) {
                this.addChild(tank);
            }
        }

        public keydown(event):void {
          managers.Keyboard.keyUp=managers.Keyboard.keyDown=false;
          switch(event.keyCode){
            case 38:
              managers.Keyboard.keyUp=true;
              break;
            case 40:
              managers.Keyboard.keyDown=true;
              break;
          }
        }
    }
}