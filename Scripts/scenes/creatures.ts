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
// Creatures SCENE
module scenes {
    export class Creatures extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
         private _creaturesImage: createjs.Bitmap;
        private _startOverButton: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Forest Image
            this._creaturesImage = new createjs.Bitmap("../../Assets/images/creatures.png");
            this.addChild(this._creaturesImage);

           // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}