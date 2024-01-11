class Player {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.gun = new Gun(x + width / 2, y + (height - 8) / 2,
            width * 1.2, 8, 'black', 0);
    }

    move(delta) {
        this.x += this.dx * this.speed * delta;
        this.y += this.dy * this.speed * delta;
        this.gun.setPosition(this.x + this.width / 2,
            this.y + (this.height - this.gun.height) / 2);
    }

    draw(_ctx, origin) {
        _ctx.setTransform(1, 0, 0, 1, origin.x, origin.y);
        _ctx.fillStyle = this.color;
        _ctx.fillRect(this.x, this.y, this.width, this.height);
        this.gun.draw(_ctx, origin);
    }
}