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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#f00", config.Screen.HALF_WIDTH, 180, true);
            this._highScore = new objects.Label("Hight Score: " + managers.Game.ScoreBoard.HighScore, "60px", "Consolas", "#000", config.Screen.HALF_WIDTH, 260, true);
            this._currentScore = new objects.Label("Your Score: " + managers.Game.ScoreBoard.Score, "40px", "Consolas", "#000", config.Screen.HALF_WIDTH, 330, true);
            //Backbutton
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - config.Screen.WIDTH + 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._background = new objects.Background();
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Started - END SCENE");
            this.addChild(this._background);
            this.addChild(this._endLabel);
            this.addChild(this._highScore);
            this.addChild(this._currentScore);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                this.backToMenu();
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map