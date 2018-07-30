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
            _this._bullet = new objects.Bullet();
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
            this._horizontalSpeed = this.getRandomSpeed(10, 15); // the tank will move down 5ppf
            console.info(this._horizontalSpeed);
        };
        Tank.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
            if (this.isFired) {
                this._bullet.Update();
            }
        };
        Tank.prototype.Fire = function (bullet) {
            console.log("fired");
            this._bullet = bullet;
            this._bullet.setCord(this.x, this.y);
            this._bullet.isShooting = true;
        };
        Tank.prototype.Reset = function () {
            this._horizontalSpeed = this.getRandomSpeed(10, 15);
            this.x = config.Screen.WIDTH;
        };
        Tank.prototype.getRandomSpeed = function (min, max) {
            var speed = (Math.floor(Math.random() * (max - min + 1)) + min) / 10;
            console.info("speed " + speed);
            return speed;
            //return .1
        };
        return Tank;
    }(objects.GameObject));
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map