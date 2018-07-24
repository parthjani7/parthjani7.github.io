module objects {
    export class Background extends createjs.Bitmap {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
          super(managers.Game.AssetManager.getResult("background"));
          this.alpha=.4;
          if(managers.Game.CurrentState==config.Scene.PLAY){
            this.alpha=1;
          }
          this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the top boundary
            if(this.x <= -2048) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._verticalSpeed = .7; // the Background will move down 5ppf
             //this._verticalSpeed = 0; // the Background will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x -= this._verticalSpeed;
            this._checkBounds();
        }

        public Reset():void {
            this.x = 0;
        }
    }
}