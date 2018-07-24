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
        /**
         * Creates an instance of Button.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        function Bullet(imagePath, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imagePath) || this;
            _this.isCentered = isCentered;
            if (isCentered) {
                _this.regX = _this.halfWidth;
                _this.regY = _this.halfHeight;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        // public methods
        /**
         * The Start Method performs object initialization
         *
         * @returns {void}
         */
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
        };
        Bullet.prototype.Reset = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map