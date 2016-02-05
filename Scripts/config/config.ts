 module config {
 // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        public static FOREST: number = 1;
        public static MEETING: number = 2;
        public static LAKE: number = 3;
        public static HOUSE: number = 4;
        public static SWORD: number = 5;
        public static FIRE: number = 6;
        public static BEAUTY: number = 7;
        public static WITCH: number = 8;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 440;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}