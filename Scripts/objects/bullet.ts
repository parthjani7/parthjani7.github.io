module objects {
  export class Bullet extends objects.GameObject {
    
      // member variables
      private _horizontalSpeed:number;
      public isShooting=false;
      public targetX;
      public targetY;
      public minSpeed=10;
      public maxSpeed=15;
      public angle;
      // constructors

      constructor() {
          super("bullet");
          this.rotation=-60;
          this.Reset();
          this.targetX=this.targetY=this.angle=0;
      }

      private _checkBounds():void {
        if(this.x <= 0 || this.y<=0) {
            this.Reset();
        }
      }

      public Start():void {
        // if(managers.Game.ScoreBoard.HighScore > 1000){
        //   this.increseBulletspeed(2);
        // }
        this._horizontalSpeed = this.getRandomSpeed(this.minSpeed,this.maxSpeed);
      }


      public Update():void {
        if(this.isShooting){
          this.x += Math.cos((this.angle) * Math.PI / 180) * (this._horizontalSpeed * 2.5);
          this.y += Math.sin((this.angle) * Math.PI / 180) * (this._horizontalSpeed * 2.5);
          this._checkBounds();
        }
      }

      public setTargetXY(x,y):void{
        this.targetX=x;
        this.targetY=y;
        this.angle = (Math.atan2(this.targetY - this.y, this.targetX - this.x ))* (180/Math.PI);
      }

      public Fire(x,y):void {
        this.setTargetXY(x,y);
        this.isShooting=true;
        if(scenes.Setting.getSound())
          createjs.Sound.volume = 0.02;
          createjs.Sound.play("gun");
      }

      public setCord(x,y):void {
        this.x =x;
        this.y =y;
        this._horizontalSpeed = this.getRandomSpeed(this.minSpeed,this.maxSpeed);
      }

      public Reset():void {
        managers.Shooting.isFired=true;
        this.isShooting=false;
        this.x = config.Screen.WIDTH+10;
        this.y =  config.Screen.WIDTH+10;
      }

      public getRandomSpeed(min,max){
        var speed=(Math.floor(Math.random() * (max - min + 1)) + min)/6;
        return speed;
      }

      public increseBulletspeed(arg0: any): any {
        this.minSpeed*=2;
        this.maxSpeed*=2;
      }

  }
}