var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SWORD SCENE
var scenes;
(function (scenes) {
    var Sword = (function (_super) {
        __extends(Sword, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Sword() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Sword.prototype.start = function () {
            // add Forest Image
            this._swordImage = new createjs.Bitmap("../../Assets/images/sword.png");
            this.addChild(this._swordImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Sword.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Sword.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Sword;
    })(objects.Scene);
    scenes.Sword = Sword;
})(scenes || (scenes = {}));
//# sourceMappingURL=sword.js.map