module objects {
    export class Button extends objects.GameObject {
        // member variables
        public isCentered:boolean;

        // constructors

        /**
         * Creates an instance of Button.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imagePath:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(imagePath);

            this.isCentered = isCentered;

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
            this.on("click", this._Clicked);
        }

        // private methods
        private _MouseOver():void {
            this.alpha = 0.7; // change alpha transparency to 70%
            this.cursor="pointer";
            if(managers.Game.CurrentState==config.Scene.START)
              createjs.Sound.play("mouseover");
        }

        private _MouseOut():void {
            this.alpha = 1.0; // change alpha transparency to 100%
        }

        private _Clicked():void {
            createjs.Sound.play("button_click");
        }

        private playSelectionAlert():void {

        }


        // public methods

        /**
         * The Start Method performs object initialization
         *
         * @returns {void}
         */
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}