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
    var About = /** @class */ (function (_super) {
        __extends(About, _super);
        // constructors
        function About() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        About.prototype.Start = function () {
            scenes.Setting.playBackgroundMusic("menu_background");
            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", config.Screen.WIDTH / 2, 50, true);
            this._about = new objects.Label("Game version: " + config.Game.VERSION +
                "\n\nDeveloped By:\n\n" +
                "Parth Jani - 300984336\n" +
                "Sanketkumar Vagadiya - 300991500\n" +
                "Pankaj Talwar - 300986202\n" +
                "\n\Guided By: " + config.Game.GUIDE, "25px", "Consolas", "#f00", config.Screen.WIDTH / 2, config.Screen.HEIGHT / 2, true);
            //Backbutton
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - config.Screen.WIDTH + 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._background = new objects.Background();
            this.Main();
        };
        About.prototype.Update = function () {
        };
        About.prototype.Reset = function () {
        };
        About.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        About.prototype.Main = function () {
            console.log("Started - About SCENE");
            this.addChild(this._background, this._gameTitle, this._about, this._about2, this._backButton);
            this._backButton.on("click", function () {
                this.backToMenu();
            }, this);
        };
        return About;
    }(objects.Scene));
    scenes.About = About;
})(scenes || (scenes = {}));
//# sourceMappingURL=about.js.map