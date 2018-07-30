var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this._isPaused = false;
            window.onkeydown = _this.keydown;
            _this.Start();
            return _this;
        }
        // private KeyUp(event):void {
        //   console.info("clicked up");
        //   //var keyCode =  event.keyCode;
        // }
        // private KeyDown(event):void {
        //   console.info("clicked down");
        // }
        // private methods
        Play.prototype._buildTanks = function (tankNum) {
            for (var count = 0; count < tankNum; count++) {
                this._tanks.push(new objects.Tank());
                this._bullets.push(new objects.Bullet());
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this._bird = new objects.Bird();
            //this._bird.scaleX="0.3";
            this._background = new objects.Background();
            //this._tanks = new objects.Tank();
            //Backbutton
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._pauseButton = new objects.Button("PauseButton", config.Screen.WIDTH - 120, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            // create an empty Array List-like object of clouds
            this._tanks = new Array();
            //Bullets
            this._bullets = new Array();
            this._buildTanks(3);
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            if (!this._isPaused) {
                this._bird.Update();
                this._background.Update();
                this._tanks.forEach(function (tank) {
                    tank.Update();
                    if (managers.Collision.check(tank, _this._bird)) {
                        console.info("collision tank bird");
                        _this._isPaused = true;
                    }
                });
                this._bullets.forEach(function (bullet) {
                    bullet.Update();
                    if (managers.Collision.check(bullet, _this._bird)) {
                        console.info("collision bullet bird");
                        _this._isPaused = true;
                    }
                });
            }
        };
        Play.prototype.isPaused = function () {
            return this._isPaused;
        };
        Play.prototype.Pause = function () {
            this._isPaused = !this._isPaused;
            if (this.isPaused()) {
                this._pauseButton.changeImage("PlayButton");
                return;
            }
            this._pauseButton.changeImage("PauseButton");
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Started - PLAY SCENE");
            // add the Background object to the scene
            this.addChild(this._background);
            this.addChild(this._backButton);
            this.addChild(this._pauseButton);
            this._backButton.on("click", function () {
                this.backToMenu();
            }, this);
            this._bird.on("click", function () {
                for (var i = 0; i < this._tanks.length; i++) {
                    this._tanks[i].Fire(this._bullets[i]);
                }
                // this._tanks.forEach(tank => {
                //
                // });
            }, this);
            this._pauseButton.on("click", function () {
                this.Pause();
            }, this);
            // window.addEventListener('keydown', function(event) {
            //
            //   // switch(event.keyCode){
            //   //   case 38:
            //   //     this._bird.moveDown();
            //   //     break;
            //   //   case 40:
            //   //     this._bird.moveDown();
            //   //     break;
            //   // }
            // }, this);
            // add the Bird object to the scene
            this.addChild(this._bird);
            for (var _i = 0, _a = this._tanks; _i < _a.length; _i++) {
                var tank = _a[_i];
                this.addChild(tank);
            }
            for (var _b = 0, _c = this._bullets; _b < _c.length; _b++) {
                var bullet = _c[_b];
                this.addChild(bullet);
            }
            //this.addChild(this._bullet);
        };
        Play.prototype.keydown = function (event) {
            managers.Keyboard.keyUp = managers.Keyboard.keyDown = false;
            switch (event.keyCode) {
                case 38:
                    managers.Keyboard.keyUp = true;
                    break;
                case 40:
                    managers.Keyboard.keyDown = true;
                    break;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map