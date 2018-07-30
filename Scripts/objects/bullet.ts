module objects {
    export class Bullet extends objects.GameObject {
        // member variables
        private _horizontalSpeed:number;
        public isShooting=false;
        // constructors

        constructor() {
            super("bullet");
            this.Reset();
        }

        private _checkBounds():void {
          if(this.x <= 0 || this.y<=0) {
              this.Reset();
          }
        }

        public Start():void {
          //this._verticalSpeed = 1.2; // the tank will move down 5ppf
          this._horizontalSpeed = this.getRandomSpeed(10,15); // the tank will move down 5ppf
          //console.info(this._horizontalSpeed);
        }


        public Update():void {
          if(this.isShooting){
            this.x -= this._horizontalSpeed;
            this.x -= this._horizontalSpeed;
            this.y -= this._horizontalSpeed;
            //console.log(this.x+" "+this.y);
            this._checkBounds();
          }
        }

        public Fire():void {
          this.isShooting=true;
        }

        public setCord(x,y):void {
          this.x =x;
          this.y =y;
          this._horizontalSpeed = this.getRandomSpeed(10,15);
        }

        public Reset():void {
          //this._horizontalSpeed = this.getRandomSpeed(10,15);
          this.x = config.Screen.WIDTH+10;
          this.y =  config.Screen.WIDTH+10;
          this.isShooting=false;
          managers.Shooting.isShooting=true;
        }

        public getRandomSpeed(min,max){
          var speed=(Math.floor(Math.random() * (max - min + 1)) + min)/5;
          console.info("speed "+speed);
          return speed;
          //return .1
        }
    }
}