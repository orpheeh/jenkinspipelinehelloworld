class Gun {
    constructor(x, y, width, height, color, rotation) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.rotation = rotation;
        this.logs = document.getElementById('mouse');
        this.lastMouseX = 0;
        this.lastMouseY = 0;
    }

    rotate(mx, my) {
        this.lastMouseX = mx;
        this.lastMouseY = my;
        this.rotation = this.getRotation();
    }

    getRotation() {
        let diffX = this.lastMouseX - GAME_WIDTH / 2;
        let diffY = this.lastMouseY - GAME_HEIGHT / 2;
        this.logs.innerHTML = `Mouse position: (${diffX}, ${diffY})`;
        const angle = Math.atan2(diffY,diffX);
        return angle;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx, origin) {
        //_ctx.fillStyle = this.color;
        //_ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = this.color;
        ctx.translate(this.x, (this.y + this.height / 2));
        ctx.rotate(this.rotation);
        ctx.translate(-(this.x), -(this.y + this.height / 2));
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}