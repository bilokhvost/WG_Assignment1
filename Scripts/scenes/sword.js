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
        Sword.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Sword.prototype._yesClick = function (event) {
            // Switch to the SWORD Scene
            scene = config.Scene.CREATURES;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Sword.prototype._noClick = function (event) {
            // Switch to the FIRE Scene
            scene = config.Scene.FIRE;
            changeScene();
        };
        return Sword;
    })(objects.Scene);
    scenes.Sword = Sword;
})(scenes || (scenes = {}));
//# sourceMappingURL=sword.js.map