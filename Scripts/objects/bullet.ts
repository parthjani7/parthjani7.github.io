module objects {
    export class Bullet extends objects.GameObject {
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