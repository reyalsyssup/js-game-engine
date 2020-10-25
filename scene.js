class Scene {
    // bgColor will be in rgb (may use regex later on for hex)
    constructor(_canvas, _width, _height) {
        if(typeof _width !== "number") throw new Error("Property \"_width\" must be a number");
        if(typeof _height !== "number") throw new Error("Property \"_height\" must be a number");
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
        if(typeof border !== "boolean") throw new Error("Property \"border\" must be of type Boolean");
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
        if(typeof setup !== "function") throw new Error("Property \"setup\" must be of type function");
        if(typeof draw !== "function") throw new Error("Property \"draw\" must be of type function");
        setup();
        // 16.66 is 60fps
        setInterval(draw, 16.66);
    }
}