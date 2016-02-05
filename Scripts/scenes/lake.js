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
// LAKE SCENE
var scenes;
(function (scenes) {
    var Lake = (function (_super) {
        __extends(Lake, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Lake() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Lake.prototype.start = function () {
            // add Forest Image
            this._lakeImage = new createjs.Bitmap("../../Assets/images/lake.png");
            this.addChild(this._lakeImage);
            // add the Yes button to the MENU scene
            this._yes = new objects.Button("yes", config.Screen.CENTER_X - 60, config.Screen.CENTER_Y + 120);
            this.addChild(this._yes);
            // Yes Button event listener
            this._yes.on("click", this._yesClick, this);
            // add the No button to the MENU scene
            this._no = new objects.Button("no", config.Screen.CENTER_X + 130, config.Screen.CENTER_Y + 120);
            this.addChild(this._no);
            // No Button event listener
            this._no.on("click", this._noClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Lake.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // YES Button click event handler
        Lake.prototype._yesClick = function (event) {
            // Switch to the SWORD Scene
            scene = config.Scene.SWORD;
            changeScene();
        };
        // NO Button click event handler
        Lake.prototype._noClick = function (event) {
            // Switch to the FIRE Scene
            scene = config.Scene.HOUSE;
            changeScene();
        };
        return Lake;
    })(objects.Scene);
    scenes.Lake = Lake;
})(scenes || (scenes = {}));
//# sourceMappingURL=lake.js.map