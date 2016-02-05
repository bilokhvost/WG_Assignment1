var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// FOREST SCENE
var scenes;
(function (scenes) {
    var Forest = (function (_super) {
        __extends(Forest, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Forest() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Forest.prototype.start = function () {
            // add Forest Image
            this._forestImage = new createjs.Bitmap("../../Assets/images/forest.png");
            this.addChild(this._forestImage);
            // add the Yes button to the MENU scene
            this._yes = new objects.Button("yes", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._yes);
            // Yes Button event listener
            this._yes.on("click", this._yesClick, this);
            // add the No button to the MENU scene
            this._no = new objects.Button("no", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._no);
            // No Button event listener
            this._no.on("click", this._noClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Forest.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Forest.prototype._yesClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LAKE;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Forest.prototype._noClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MEETING;
            changeScene();
        };
        return Forest;
    })(objects.Scene);
    scenes.Forest = Forest;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest.js.map