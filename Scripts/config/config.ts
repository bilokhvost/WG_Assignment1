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
        public static VILLAGE: number = 9;
        public static EASYHOUSE: number = 10;
        public static ZOMBIE: number = 11;
        public static SPACESHIP: number = 12;
        public static HAPPYEND: number = 13;
        public static DISEASE: number = 14;
        public static CREATURES:number=15;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 360;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 180;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}