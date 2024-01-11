initialize();

function initialize() {
    _ctx = _canvas.getContext("2d");

    _player = new Player(10, 10, 32, 32, "rgb(10, 68, 10)", 100);

    poolEvent();
    setInterval(() => {
        requestAnimationFrame(gameLoop);
    }, _fps / 1000.0);
}

function gameLoop() {
    let delta = _fps / 1000;
    if (isNaN(delta)) {
        delta = 30 / 1000.0;
    }
    update(delta);
    render();

    calculateFPS();
}

function poolEvent() {
    window.addEventListener("keydown", (event) => {
        if(event.key == KEY_UP) {
            _player.dy = -1;   
        }
        if(event.key == KEY_DOWN) {
            _player.dy = 1;   
        }
        if(event.key == KEY_LEFT) {
            _player.dx = -1;   
        }
        if(event.key == KEY_RIGHT) {
            _player.dx = 1;   
        }
    });
    window.addEventListener("keyup", (event) => {
        if(event.key == KEY_UP || event.key == KEY_DOWN) {
            _player.dy = 0;   
        }
        if(event.key == KEY_LEFT || event.key == KEY_RIGHT) {
            _player.dx = 0;   
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - CANVAS_X;
        const mouseY = e.clientY - CANVAS_Y;
        _player.gun.rotate(mouseX, mouseY, _fps / 1000);
    });
}

function update(delta) {
    _player.move(delta);
}

function render() {
    //Clear screen
    _ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //Draw background
    _ctx.fillStyle = GROUND_COLOR;
    _ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    _player.draw(_ctx,  _canvas_origin);
}

function calculateFPS() {
    _fpsLog.innerHTML = _fps.toFixed(1) + " FPS";
}
