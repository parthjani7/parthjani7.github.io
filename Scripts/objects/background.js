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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // constructors
        function Background() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background")) || this;
            _this.alpha = .4;
            if (managers.Game.CurrentState == config.Scene.PLAY) {
                _this.alpha = 1;
            }
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -2048) {
                this.Reset();
            }
        };
        // public methods
        Background.prototype.Start = function () {
            this._verticalSpeed = .7; // the Background will move down 5ppf
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.x -= this._verticalSpeed;
            this._checkBounds();
        };
        Background.prototype.Reset = function () {
            this.x = 0;
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map