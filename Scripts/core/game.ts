﻿ /*
 Kateryna Bilokhvost
 Last modified by:Kateryna Bilokhvost
 Last Modified date: February 5, 2016
 Description: Yes-No game on the basis of The Sleeping Beauty Tale
 Revision History:
  Commit 1: Initial Commit
  Commit 2-6: Scenes were added
  Commit 7: Background to screen was added
 */
/// <reference path = "_reference.ts" />

// global variables
var canvas:HTMLElement;
var stage:createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var forest: scenes.Forest;
var meeting: scenes.Meeting;
var lake:scenes.Lake;
var house:scenes.House;
var sword:scenes.Sword;
var creatures:scenes.Creatures;
var fire: scenes.Fire;
var beauty: scenes.Beauty;
var witch: scenes.Witch;
var village: scenes.Village;
var easyHouse:scenes.EasyHouse;
var zombie: scenes.Zombie;
var spaceship: scenes.Spaceship;
var happyEnd: scenes.HappyEnd;
var disease: scenes.Disease;

function init(): void {
// create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the INTRO scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
            
       case config.Scene.FOREST:
            // show the FOREST scene
            stage.removeAllChildren();
            forest = new scenes.Forest();
            currentScene = forest;
            console.log("Starting forest Scene");
            break;
            
        case config.Scene.MEETING:
            // show the MEETING scene
            stage.removeAllChildren();
            meeting = new scenes.Meeting();
            currentScene = meeting;
            console.log("Starting meeting Scene");
            break;
            
        case config.Scene.LAKE:
            // show the game LAKE scene
            stage.removeAllChildren();
            lake = new scenes.Lake();
            currentScene = lake;
            console.log("Starting lake Scene");
            break;
            
        case config.Scene.HOUSE:
             // show the game HOUSE scene
            stage.removeAllChildren();
            house = new scenes.House();
            currentScene = house;
            console.log("Starting house Scene");
            break;
            
        case config.Scene.SWORD:  
             // show the game SWORD scene
            stage.removeAllChildren();
            sword = new scenes.Sword();
            currentScene = sword;
            console.log("Starting sword Scene");
            break;
            
        case config.Scene.CREATURES:  
             // show the game FIRE scene
            stage.removeAllChildren();
            creatures = new scenes.Creatures();
            currentScene = creatures;
            console.log("Starting creatures Scene");
            break;
            
        case config.Scene.FIRE:  
             // show the game FIRE scene
            stage.removeAllChildren();
            fire = new scenes.Fire();
            currentScene = fire;
            console.log("Starting fire Scene");
            break;
            
        case config.Scene.BEAUTY:  
             // show the game Beauty scene
            stage.removeAllChildren();
            beauty = new scenes.Beauty();
            currentScene = beauty;
            console.log("Starting beauty Scene");
            break;
 
         case config.Scene.WITCH:  
             // show the game Witch scene
            stage.removeAllChildren();
            witch = new scenes.Witch();
            currentScene = witch;
            console.log("Starting witch Scene");
            break; 
            
         case config.Scene.VILLAGE:  
             // show the game Village scene
            stage.removeAllChildren();
            village = new scenes.Village();
            currentScene = village;
            console.log("Starting village Scene");
            break;  
            
         case config.Scene.EASYHOUSE:  
             // show the game Easy House scene
            stage.removeAllChildren();
            easyHouse = new scenes.EasyHouse();
            currentScene = easyHouse;
            console.log("Starting Easy House Scene");
            break;    
            
        case config.Scene.ZOMBIE:  
             // show the game Zombie scene
            stage.removeAllChildren();
            zombie = new scenes.Zombie();
            currentScene = zombie;
            console.log("Starting Zombie Scene");
            break;
            
        case config.Scene.SPACESHIP:  
             // show the game Spaceship scene
            stage.removeAllChildren();
            spaceship = new scenes.Spaceship();
            currentScene = spaceship;
            console.log("Starting Spaceship Scene");
            break;
            
        case config.Scene.HAPPYEND:  
             // show the game Spaceship scene
            stage.removeAllChildren();
            happyEnd = new scenes.HappyEnd();
            currentScene = happyEnd;
            console.log("Starting Happy End Scene");
            break;    

        case config.Scene.DISEASE:  
             // show the game Spaceship scene
            stage.removeAllChildren();
            disease = new scenes.Disease();
            currentScene = disease;
            console.log("Starting Disease Scene");
            break;    
                          
            
}

    console.log(currentScene.numChildren);
}


































/*
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
var helloLabel: objects.Label;
var startButton: objects.Button;


function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    state = config.MENU_STATE;
    changeState();
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}



// state machine prep
function changeState(): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stateFunction = states.menu;

            break;
        case config.PLAY_STATE:
            // show the play scene
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }

    stateFunction();
}
*/