// LEFT_CAVE SCENE
module scenes {
    export class Forest extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
         private _forestImage: createjs.Bitmap;
        private _yes: createjs.Bitmap;
        private _no: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Forest Image
            this._forestImage = new createjs.Bitmap("../../Assets/images/forest.png");
            this.addChild(this._forestImage);

           // add the Yes button to the MENU scene
            this._yes = new objects.Button(
                "yes",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._yes);
            
            // Yes Button event listener
            this._yes.on("click", this._yesClick, this);
            
            // add the No button to the MENU scene
            this._no = new objects.Button(
                "no",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
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
        
        // LEFT_CAVE Button click event handler
        private _yesClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.FOREST;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _noClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MEETING;
            changeScene();
        }
    }
}