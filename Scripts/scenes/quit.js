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
    var Quit = /** @class */ (function (_super) {
        __extends(Quit, _super);
        // constructors
        function Quit() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Quit.prototype.Start = function () {
            this._thankTitle = new objects.Label("Thank you for playing " + config.Game.NAME, "40px", "Consolas", "#000000", config.Screen.WIDTH / 2, 150, true);
            this._background = new objects.Background();
            this.Main();
        };
        Quit.prototype.Update = function () {
        };
        Quit.prototype.Reset = function () {
        };
        Quit.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Quit.prototype.Main = function () {
            if (scenes.Setting.getSound()) {
                scenes.Setting.playBackgroundMusic("menu_background");
            }
            console.log("Started - Quit SCENE");
            // add the Background object to the scene
            this.addChild(this._background);
            this.addChild(this._thankTitle);
        };
        return Quit;
    }(objects.Scene));
    scenes.Quit = Quit;
})(scenes || (scenes = {}));
//# sourceMappingURL=quit.js.map