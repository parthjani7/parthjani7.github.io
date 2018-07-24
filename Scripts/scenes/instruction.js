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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Instruction.prototype.Start = function () {
            this._gameTitle = new objects.Label(config.Game.NAME, "40px", "Consolas", "#000000", (config.Screen.WIDTH / 2), 50, true);
            this._instruction = new objects.Label(config.Game.NAME + " is a 2D game, where player can move the bird to save it from tank attacks.\nMoreover Bird can shoot bombs on tanks by pressing space bar to destroy them.\nHitting bombs on tanks will add points to the wallet.", "22px", "Consolas", "#000000", (config.Screen.WIDTH / 2) - 30, 200, true);
            //Backbutton
            this._backButton = new objects.Button("BackButton", config.Screen.WIDTH - config.Screen.WIDTH + 50, config.Screen.HEIGHT - config.Screen.HEIGHT + 50, true);
            this._background = new objects.Background();
            this.Main();
        };
        Instruction.prototype.Update = function () {
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Started - Instruction SCENE");
            this.addChild(this._background);
            // add the Background object to the scene
            this.addChild(this._instruction);
            this.addChild(this._gameTitle);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                this.backToMenu();
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map