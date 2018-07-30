module objects {
    export class Tank extends objects.GameObject {
        // member variables
        private _horizontalSpeed:number;
        private _bullet:objects.Bullet;
        private isFired:boolean;


        // constructors
        constructor() {
            super("tank_small");
            this.x=config.Screen.WIDTH-this.width;
            this.y=config.Screen.HEIGHT-this.height-50;
            this._bullet=new objects.Bullet();
            this.isFired=false;
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
           this._horizontalSpeed = this.getRandomSpeed(10,15); // the tank will move down 5ppf
           console.info(this._horizontalSpeed);
      }

        public Update():void {
          this.x -= this._horizontalSpeed;
          this._checkBounds();
          if(this.isFired){
            this._bullet.Update();
          }
        }

        public Fire(bullet:objects.Bullet):void {
          console.log("fired");
          this._bullet=bullet;
          this._bullet.setCord(this.x,this.y);
          this._bullet.isShooting=true;
        }

        public Reset():void {
          this._horizontalSpeed = this.getRandomSpeed(10,15);
          this.x = config.Screen.WIDTH;
        }
        public getRandomSpeed(min,max){
          var speed=(Math.floor(Math.random() * (max - min + 1)) + min)/10;
          console.info("speed "+speed);
          return speed;
          //return .1
        }
    }
}