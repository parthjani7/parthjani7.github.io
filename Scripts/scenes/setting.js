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
    var Setting = /** @class */ (function (_super) {
        __extends(Setting, _super);
        // constructors
        function Setting() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Setting.prototype.Start = function () {
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - config.Screen.WIDTH + 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._soundButton = new objects.Button("SoundOffButton", config.Screen.WIDTH / 2, 130, true);
            if (Setting.getSound()) {
                this._soundButton = new objects.Button("SoundOnButton", config.Screen.WIDTH / 2, 130, true);
                this.playBackgroundMusic("menu_background");
            }
            this._soundLable1 = new objects.Label("Sound Preference: " + (Setting.getSound() ? "ON" : "OFF"), "25px", "Consolas", "#000000", (config.Screen.WIDTH / 2) - 30, 200, true);
            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", config.Screen.WIDTH / 2, 50, true);
            this._background = new objects.Background();
            this.Main();
        };
        Setting.prototype.Update = function () {
        };
        Setting.prototype.Reset = function () {
        };
        Setting.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Setting.prototype.soundToggle = function () {
            if (Setting.getSound()) {
                this.stopBackgroundMusic();
                localStorage.setItem("space_shooter_sound", "false");
                this._soundLable1.text = "Sound Preference: OFF";
                this._soundButton.changeImage("SoundOffButton");
                return;
            }
            localStorage.setItem("space_shooter_sound", "true");
            this._soundButton.changeImage("SoundOnButton");
            this._soundLable1.text = "Sound Preference: ON";
            this.playBackgroundMusic("menu_background");
        };
        Setting.getSound = function () {
            var sound = localStorage.getItem("space_shooter_sound");
            if (sound == "false") {
                return false;
            }
            return true;
        };
        Setting.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            this.addChild(this._soundButton);
            this.addChild(this._soundLable1);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                this.backToMenu();
            }, this);
            this._soundButton.on("click", function () {
                this.soundToggle();
                console.log("Sound Setting " + Setting.getSound());
            }, this);
        };
        return Setting;
    }(objects.Scene));
    scenes.Setting = Setting;
})(scenes || (scenes = {}));
//# sourceMappingURL=setting.js.map