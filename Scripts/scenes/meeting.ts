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
module scenes {
    export class Meeting extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _meetingImage: createjs.Bitmap;
        private _yes: objects.Button;
        private _no: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._meetingImage = new createjs.Bitmap("../../Assets/images/meeting.png");
            this.addChild(this._meetingImage);
            
            // add the Yes button to the MENU scene
            this._yes = new objects.Button(
                "yes",
                config.Screen.CENTER_X - 60,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._yes);
            
            // Yes Button event listener
            this._yes.on("click", this._yesClick, this);
            
            // add the No button to the MENU scene
            this._no = new objects.Button(
                "no",
                config.Screen.CENTER_X + 130,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._no);
            
            // No Button event listener
            this._no.on("click", this._noClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // YES Button click event handler
        private _yesClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.VILLAGE;
            changeScene();
        }
        
        // NO Button click event handler
        private _noClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.EASYHOUSE;
            changeScene();
        }
    }
}