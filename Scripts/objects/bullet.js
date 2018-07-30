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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructors
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.isShooting = false;
            _this.Reset();
            return _this;
        }
        Bullet.prototype._checkBounds = function () {
            if (this.x <= 0 || this.y <= 0) {
                this.Reset();
            }
        };
        Bullet.prototype.Start = function () {
            //this._verticalSpeed = 1.2; // the tank will move down 5ppf
            this._horizontalSpeed = this.getRandomSpeed(10, 15); // the tank will move down 5ppf
            console.info(this._horizontalSpeed);
        };
        Bullet.prototype.Update = function () {
            if (this.isShooting) {
                this.x -= this._horizontalSpeed;
                this.y -= this._horizontalSpeed;
                console.log(this.x + " " + this.y);
                this._checkBounds();
            }
        };
        Bullet.prototype.setCord = function (x, y) {
            this.x = x;
            this.y = y;
            this._horizontalSpeed = this.getRandomSpeed(10, 15);
        };
        Bullet.prototype.Reset = function () {
            //this._horizontalSpeed = this.getRandomSpeed(10,15);
            this.x = config.Screen.WIDTH + 10;
            this.y = config.Screen.WIDTH + 10;
            this.isShooting = false;
        };
        Bullet.prototype.getRandomSpeed = function (min, max) {
            var speed = (Math.floor(Math.random() * (max - min + 1)) + min) / 10;
            console.info("speed " + speed);
            return speed;
            //return .1
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map