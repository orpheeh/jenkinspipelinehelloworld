let _canvas = document.getElementById("gameCanvas");
let _fpsLog = document.getElementById("fps");

let _ctx;

const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const GROUND_COLOR = "rgb(179, 104, 29)";

const KEY_UP = "w";
const KEY_DOWN = "s";
const KEY_LEFT = "a";
const KEY_RIGHT = "d";

const CANVAS_X = _canvas.getBoundingClientRect().left;
const CANVAS_Y = _canvas.getBoundingClientRect().top;
let _canvas_origin = {
    x: GAME_WIDTH / 2,
    y: GAME_HEIGHT / 2
};

let _fps = 30;
const FRAMERATE = 1000.0 / 30;

let _player;