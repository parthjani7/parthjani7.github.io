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
            _this.rotation = -60;
            _this.Reset();
            _this.targetX = _this.targetY = _this.angle = 0;
            return _this;
        }
        Bullet.prototype._checkBounds = function () {
            if (this.x <= 0 || this.y <= 0) {
                this.Reset();
            }
        };
        Bullet.prototype.Start = function () {
            this._horizontalSpeed = this.getRandomSpeed(10, 15);
        };
        Bullet.prototype.Update = function () {
            if (this.isShooting) {
                this.x += Math.cos((this.angle) * Math.PI / 180) * (this._horizontalSpeed * 2.5);
                this.y += Math.sin((this.angle) * Math.PI / 180) * (this._horizontalSpeed * 2.5);
                this._checkBounds();
            }
        };
        Bullet.prototype.setTargetXY = function (x, y) {
            this.targetX = x;
            this.targetY = y;
            this.angle = (Math.atan2(this.targetY - this.y, this.targetX - this.x)) * (180 / Math.PI);
        };
        Bullet.prototype.Fire = function (x, y) {
            this.setTargetXY(x, y);
            this.isShooting = true;
            if (scenes.Setting.getSound())
                createjs.Sound.play("gun");
        };
        Bullet.prototype.setCord = function (x, y) {
            this.x = x;
            this.y = y;
            this._horizontalSpeed = this.getRandomSpeed(10, 15);
        };
        Bullet.prototype.Reset = function () {
            managers.Shooting.isFired = true;
            this.isShooting = false;
            this.x = config.Screen.WIDTH + 10;
            this.y = config.Screen.WIDTH + 10;
        };
        Bullet.prototype.getRandomSpeed = function (min, max) {
            var speed = (Math.floor(Math.random() * (max - min + 1)) + min) / 6;
            return speed;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map