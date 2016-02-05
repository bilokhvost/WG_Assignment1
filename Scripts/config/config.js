/*
Kateryna Bilokhvost
Last modified by:Kateryna Bilokhvost
Last Modified date: February 5, 2016
Description: Yes-No game on the basis of The Sleeping Beauty Tale
Revision History:
 Commit 1: Initial Commit
 Commit 2-6: Scenes were added
 Commit 7: Background to screen was added
*/
var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.FOREST = 1;
        Scene.MEETING = 2;
        Scene.LAKE = 3;
        Scene.HOUSE = 4;
        Scene.SWORD = 5;
        Scene.FIRE = 6;
        Scene.BEAUTY = 7;
        Scene.WITCH = 8;
        Scene.VILLAGE = 9;
        Scene.EASYHOUSE = 10;
        Scene.ZOMBIE = 11;
        Scene.SPACESHIP = 12;
        Scene.HAPPYEND = 13;
        Scene.DISEASE = 14;
        Scene.CREATURES = 15;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 360;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 180;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map