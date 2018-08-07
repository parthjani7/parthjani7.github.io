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
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        // member variables
        // constructors
        function Bird() {
            var _this = _super.call(this, Bird.getBird()) || this;
            _this.y = config.Screen.HALF_HEIGHT;
            _this.Start();
            return _this;
        }
        // private methods
        Bird.prototype._checkBounds = function () {
            // check the right boundary
            if (this.y > (config.Screen.HEIGHT - this.halfHeight)) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check the left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Bird.prototype.Start = function () {
            this.regY = this.halfHeight;
            this.regX = this.halfWidth;
            this.x = 120;
        };
        Bird.getBird = function () {
            var bird = localStorage.getItem("bird");
            if (!bird) {
                return "bird1";
            }
            return bird;
        };
        Bird.setBird = function (bird) {
            localStorage.setItem("bird", bird.toString());
        };
        Bird.prototype.Update = function () {
            //this.y = managers.Game.Stage.mouseY;
            this.Move();
            this._checkBounds();
        };
        Bird.prototype.Move = function () {
            if (managers.Keyboard.keyUp)
                this.moveUp();
            if (managers.Keyboard.keyDown)
                this.moveDown();
        };
        Bird.prototype.moveUp = function () {
            //console.info("moved up");
            this.y -= 2;
        };
        Bird.prototype.moveDown = function () {
            //console.info("moved down");
            this.y += 2;
        };
        Bird.prototype.Reset = function () {
        };
        return Bird;
    }(objects.GameObject));
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map