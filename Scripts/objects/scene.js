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
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        // constructors
        function Scene() {
            return _super.call(this) || this;
        }
        // private methods
        // public methods
        Scene.prototype.Start = function () {
            console.info("start called");
        };
        Scene.prototype.Update = function () {
        };
        Scene.prototype.Reset = function () {
        };
        Scene.prototype.Destroy = function () {
        };
        Scene.prototype.backToMenu = function () {
            createjs.Sound.volume = 1;
            Scene.stopBackgroundMusic();
            managers.Game.ScoreBoard.Reset();
            managers.Game.CurrentState = config.Scene.START;
        };
        Scene.playBackgroundMusic = function (menu_background) {
            createjs.Sound.play(menu_background, { interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1 });
        };
        Scene.stopBackgroundMusic = function () {
            createjs.Sound.stop();
        };
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map