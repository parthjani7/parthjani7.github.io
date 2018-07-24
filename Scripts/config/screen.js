var config;
(function (config) {
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        //public static WIDTH:number = 840;
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 512;
        Screen.HALF_WIDTH = 1024 / 2;
        Screen.HALF_HEIGHT = 512 / 2;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map