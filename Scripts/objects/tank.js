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
var objects;
(function (objects) {
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        // constructors
        function Tank() {
            var _this = _super.call(this, "tank_small") || this;
            _this.x = config.Screen.WIDTH - _this.width;
            _this.y = config.Screen.HEIGHT - _this.height - 50;
            _this._bullets = new Array();
            _this.isFired = false;
            _this.Start();
            return _this;
        }
        // private methods
        Tank.prototype._checkBounds = function () {
            if (this.x <= 0 - this.width) {
                this.Reset();
            }
        };
        // public methods
        Tank.prototype.Start = function () {
            //this._verticalSpeed = 1.2; // the tank will move down 5ppf
            this._horizontalSpeed = this.getRandomSpeed(10, 15) / 10; // the tank will move down 5ppf
            console.info(this._horizontalSpeed);
        };
        Tank.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
            // if(this.isFired){
            //   this._bullets.forEach(bullet => {
            //     bullet.Update();
            //   });
            // }
        };
        // public Fire(bullets:Array<objects.Bullet>):void {
        //   // console.log("fired");
        //   // console.log(bullets);
        //     for(var i=0;i<bullets.length;i++){
        //       this._bullets[i]=bullets[i];
        //       this._bullets[i].setCord(this.x,this.y);
        //       this._bullets[i].isShooting=true;
        //     }
        //     this.isFired=true;
        // }
        Tank.prototype.Reset = function () {
            this._horizontalSpeed = this.getRandomSpeed(10, 15) / 10;
            this.x = config.Screen.WIDTH;
        };
        Tank.prototype.getRandomSpeed = function (min, max) {
            var speed = (Math.floor(Math.random() * (max - min + 1)) + min);
            console.info("speed " + speed);
            return speed;
            //return .1
        };
        return Tank;
    }(objects.GameObject));
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map