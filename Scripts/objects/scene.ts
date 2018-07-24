module objects {
    export abstract class Scene extends createjs.Container {
        // member variables
        protected _backButton:objects.Button;

        // constructors
        constructor() {
            super();
        }

        // private methods

        // public methods
        public Start():void {
          console.info("start called");


        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {

        }
        public backToMenu():void{
          this.stopBackgroundMusic();
          managers.Game.CurrentState = config.Scene.START;
				}

        public playBackgroundMusic(menu_background){
            createjs.Sound.play(menu_background, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        }
        public stopBackgroundMusic(){
            createjs.Sound.stop();
        }

        public Main():void {
        }

    }
}