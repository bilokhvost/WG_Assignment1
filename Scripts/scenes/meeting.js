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
// MEETING SCENE
var scenes;
(function (scenes) {
    var Meeting = (function (_super) {
        __extends(Meeting, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Meeting() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Meeting.prototype.start = function () {
            // add Intro Image
            this._meetingImage = new createjs.Bitmap("../../Assets/images/meeting.png");
            this.addChild(this._meetingImage);
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
        Meeting.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // YES Button click event handler
        Meeting.prototype._yesClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.VILLAGE;
            changeScene();
        };
        // NO Button click event handler
        Meeting.prototype._noClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.EASYHOUSE;
            changeScene();
        };
        return Meeting;
    })(objects.Scene);
    scenes.Meeting = Meeting;
})(scenes || (scenes = {}));
//# sourceMappingURL=meeting.js.map