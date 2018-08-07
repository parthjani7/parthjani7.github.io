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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", config.Screen.WIDTH / 2, 50, true);
            this._playButton = new objects.Button("PlayButton", config.Screen.WIDTH / 2, 230, true);
            this._settingButton = new objects.Button("SettingButton", config.Screen.WIDTH - config.Screen.WIDTH + 80, config.Screen.HEIGHT - 40, true);
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.WIDTH - config.Screen.WIDTH + 150, config.Screen.HEIGHT - 40, true);
            this._characterButton = new objects.Button("CharacterButton", config.Screen.WIDTH - config.Screen.WIDTH + 220, config.Screen.HEIGHT - 40, true);
            this._aboutButton = new objects.Button("AboutButton", config.Screen.WIDTH - 150, config.Screen.HEIGHT - 40, true);
            this._exitButton = new objects.Button("ExitButton", config.Screen.WIDTH - 80, config.Screen.HEIGHT - 40, true);
            this._background = new objects.Background();
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            this.addChild(this._playButton);
            this.addChild(this._settingButton);
            this.addChild(this._instructionButton);
            this.addChild(this._aboutButton);
            this.addChild(this._exitButton);
            this.addChild(this._characterButton);
            this._playButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._settingButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.SETTING;
            }, this);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
            this._aboutButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.ABOUT;
            }, this);
            this._exitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.QUIT;
            }, this);
            this._characterButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.CHARACTER;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map