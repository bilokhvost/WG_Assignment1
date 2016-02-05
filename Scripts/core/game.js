/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var forest;
var meeting;
var lake;
var house;
var sword;
var fire;
var beauty;
var witch;
function init() {
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
function gameLoop(event) {
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
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
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
            // show the game Beauty scene
            stage.removeAllChildren();
            witch = new scenes.Witch();
            currentScene = witch;
            console.log("Starting witch Scene");
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
//# sourceMappingURL=game.js.map