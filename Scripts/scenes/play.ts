module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _bird:objects.Bird;
        private _background:objects.Background;
        private _tanks:objects.Tank[];
        private _bullets:objects.Bullet[];
        private _pauseButton:objects.Button;
        
        private _isPaused:boolean;

        // constructors
        constructor() {
            super();
            this._isPaused=false;
            window.onkeydown = this.keydown;
            this.Start();
        }

        // public methods
        public Start():void {

            this._bird = new objects.Bird();
            this._background = new objects.Background();

            //Backbutton
            this._backButton = new objects.Button("BackButton",config.Screen.WIDTH-50, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);

            this._pauseButton = new objects.Button("PauseButton",config.Screen.WIDTH-120, config.Screen.HEIGHT-config.Screen.HEIGHT+50, true);

            if (scenes.Setting.getSound()) {
                scenes.Setting.playBackgroundMusic("menu_background");
            }

            // create an empty Array List-like object of clouds
            this._tanks = new Array<objects.Tank>();

            //Bullets
             this._bullets=new Array<objects.Bullet>();

            this._buildTanks(3);
            managers.Shooting.isFired=true;
            this.Main();
        }

        private _buildTanks(tankNum):void {
            for (let count = 0; count < tankNum; count++) {
                this._tanks.push(new objects.Tank());
                this._bullets.push(new objects.Bullet());
            }
        }

        public Update():void {

          if(!this._isPaused){
            this._bird.Update();
            this._background.Update();

            for(var i=0;i<this._tanks.length;i++){
                if(this._tanks[i].x > 300 && managers.Shooting.isFired && !this._bullets[i].isShooting){
                    this._bullets[i].setCord(this._tanks[i].x,this._tanks[i].y);
                    this._bullets[i].y=this._tanks[i].y;
                    this._bullets[i].Fire(this._bird.x,this._bird.y);
                }

                this._tanks[i].Update();
                managers.Collision.check(this._bird,this._tanks[i]);
            }

            this._bullets.forEach(bullet => {
                bullet.Update();
                managers.Collision.check(this._bird,bullet);
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

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");
            managers.Keyboard.keyUp=managers.Keyboard.keyDown=false;

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

            // add the Bird object to the scene
            this.addChild(this._bird);

            for (const tank of this._tanks) {
                this.addChild(tank);
            }
            for (const bullet of this._bullets) {
                this.addChild(bullet);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            
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