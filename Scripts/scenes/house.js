var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// FOREST SCENE
var scenes;
(function (scenes) {
    var House = (function (_super) {
        __extends(House, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function House() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        House.prototype.start = function () {
            // add Forest Image
            this._houseImage = new createjs.Bitmap("../../Assets/images/scaryHouse.png");
            this.addChild(this._houseImage);
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
        House.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        House.prototype._yesClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.BEAUTY;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        House.prototype._noClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.WITCH;
            changeScene();
        };
        return House;
    })(objects.Scene);
    scenes.House = House;
})(scenes || (scenes = {}));
//# sourceMappingURL=house.js.map