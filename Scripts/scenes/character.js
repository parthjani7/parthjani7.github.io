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
    var Character = /** @class */ (function (_super) {
        __extends(Character, _super);
        // constructors
        function Character() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Character.prototype.Start = function () {
            this._gameTitle = new objects.Label("Click on Bird of your choice", "40px", "Consolas", "#000000", config.Screen.WIDTH / 2, 50, true);
            this._mainCharacter = new createjs.Bitmap(managers.Game.AssetManager.getResult(objects.Bird.getBird()));
            this._mainCharacter.x = config.Screen.HALF_WIDTH;
            this._mainCharacter.y = config.Screen.HALF_HEIGHT + 70;
            this._gameTitle = new objects.Label("Current Player", "35px", "Consolas", "#000000", config.Screen.HALF_WIDTH + 30, this._mainCharacter.y + 90, true);
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - config.Screen.WIDTH + 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._background = new objects.Background();
            this._characters = new Array();
            this._initCharacters(6);
            this.Main();
        };
        Character.prototype._initCharacters = function (charactersNum) {
            for (var count = 1; count <= charactersNum; count++) {
                this._characters.push(new objects.Button("bird" + (count), (config.Screen.HALF_WIDTH - 450) + (count * 130), config.Screen.HALF_HEIGHT - 50, true));
            }
        };
        Character.prototype.Update = function () {
        };
        Character.prototype.Reset = function () {
        };
        Character.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Character.prototype.Main = function () {
            if (scenes.Setting.getSound()) {
                scenes.Setting.playBackgroundMusic("menu_background");
            }
            console.log("Started - START SCENE");
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            var _loop_1 = function (character) {
                this_1.addChild(character);
                character.on("click", function () {
                    objects.Bird.setBird(character.name);
                    this._mainCharacter.image = managers.Game.AssetManager.getResult(character.name);
                }, this_1);
            };
            var this_1 = this;
            for (var _i = 0, _a = this._characters; _i < _a.length; _i++) {
                var character = _a[_i];
                _loop_1(character);
            }
            this.addChild(this._mainCharacter);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                this.backToMenu();
            }, this);
        };
        return Character;
    }(objects.Scene));
    scenes.Character = Character;
})(scenes || (scenes = {}));
//# sourceMappingURL=character.js.map