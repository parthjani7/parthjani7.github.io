module objects {
  export class Tank extends objects.GameObject {
    // member variables
    private _horizontalSpeed:number;

    // constructors
    constructor() {
        super("tank_small");
        this.x=config.Screen.WIDTH-this.width;
        this.y=config.Screen.HEIGHT-this.height-50;
        this.Start();
    }

    // private methods
    private _checkBounds():void {
      if(this.x <= 0-this.width) {
          this.Reset();
      }
    }

    // public methods
    public Start():void {
      //this._verticalSpeed = 1.2; // the tank will move down 5ppf
      this._horizontalSpeed = this.getRandomSpeed(10,15)/10; // the tank will move down 5ppf
      console.info(this._horizontalSpeed);
      if(scenes.Setting.getSound()){
        scenes.Setting.playBackgroundMusic("menu_background");
      }
    }

    public Update():void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset():void {
      managers.Game.ScoreBoard.increaseScore = 100;
      this._horizontalSpeed = this.getRandomSpeed(10,15)/10;
      this.x = config.Screen.WIDTH;
    }
    
    public getRandomSpeed(min,max){
      var speed=(Math.floor(Math.random() * (max - min + 1)) + min);
      console.info("speed "+speed);
      return speed;
      //return .1
    }
  }
}