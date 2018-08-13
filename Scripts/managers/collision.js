var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    console.info(object2.name);
                    switch (object2.name) {
                        case "bullet":
                            managers.Game.ScoreBoard.Lives -= 1;
                            if (scenes.Setting.getSound()) {
                                createjs.Sound.play("hawk");
                            }
                            break;
                        case "tank_small":
                            managers.Game.ScoreBoard.Lives -= 1;
                            if (scenes.Setting.getSound()) {
                                createjs.Sound.play("hawk");
                            }
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
            return object2.isColliding;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map