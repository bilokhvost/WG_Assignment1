var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// Spaceship SCENE
var scenes;
(function (scenes) {
    var Spaceship = (function (_super) {
        __extends(Spaceship, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Spaceship() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Spaceship.prototype.start = function () {
            // add Forest Image
            this._spaceImage = new createjs.Bitmap("../../Assets/images/spaceship.png");
            this.addChild(this._spaceImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Spaceship.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Spaceship.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Spaceship;
    })(objects.Scene);
    scenes.Spaceship = Spaceship;
})(scenes || (scenes = {}));
//# sourceMappingURL=spaceship.js.map