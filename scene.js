class Scene {
    // bgColor will be in rgb (may use regex later on for hex)
    constructor(_canvas, _width, _height) {
        this.canvas = _canvas;
        this.ctx = canvas.getContext("2d");

        this.width = _width;
        this.height = _height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.bgColor = "rgb(255, 255, 255)";
    }

    // Draws the background colour as this.bgColor and if border is true adds a 5px border
    clear(border) {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        if(border) {
            this.ctx.lineWidth = 5;
            this.ctx.fillStyle = "rgb(0, 0, 0)";
            this.ctx.strokeRect(0, 0, this.width, this.height);
        }
    }

    getContext() { return this.ctx; }

    run(setup, draw) {
        setup();
        // 16.66 is 60fps
        setInterval(draw, 16.66);
    }
}