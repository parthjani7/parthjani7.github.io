module objects {
    export class Bird extends objects.GameObject {
        // member variables

        // constructors
        constructor() {
            super("bird");
            this.y=config.Screen.HALF_HEIGHT;
            this.Start();

        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.y > (config.Screen.HEIGHT - this.halfHeight)) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }

            // check the left boundary
            if(this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        }

         // public methods
         public Start():void {
            this.regY = this.halfHeight;
            this.regX = this.halfWidth;
            this.x = 120;
        }

        public Update():void {
            //this.y = managers.Game.Stage.mouseY;
            this.Move();
            this._checkBounds();
        }

        public Move():void{

          if(managers.Keyboard.keyUp)
            this.moveUp();
          if(managers.Keyboard.keyDown)
            this.moveDown();
        }

        public moveUp():void {
          //console.info("moved up");
          this.y-=2;
        }

        public moveDown():void {
          //console.info("moved down");
          this.y+=2;
        }



        public Reset():void {

        }
    }
}