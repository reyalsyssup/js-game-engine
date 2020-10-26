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

let keyDown;
let requested = false;
let keyLog = [];

let mouse = {x: 0, y: 0};

function setMouse(event) {
    let rect = canvas.getBoundingClientRect();
    mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

window.addEventListener("mousemove", event => setMouse(event));

window.addEventListener("keydown", event => {
    keyDown = event.key;
    // Prevents duplication of keys in keylog
    let counter = 0;
    let alreadyIn = false;
    for(let i = 0; i < keyLog.length; i++) {
        if(keyLog[i] === keyDown) counter++;
        if(counter > 0) {
            alreadyIn = true;
            break;
        }
    }
    if(!alreadyIn) keyLog.push(keyDown);
});

window.addEventListener("keyup", event => {
    for(let i = 0; i < keyLog.length; i++) {
        if(keyLog[i] === event.key) {
            keyLog.splice(i, 1);
        }
    }
});

function getKeyDown() {
    return keyLog;
}

class Sprite {
    constructor(_scene, _path, _x, _y, _type) {
        if(typeof _path !== "string") throw new Error("Property \"_path\" must be of type string");
        if(typeof _x !== "number") throw new Error("Property \"_x\" must be of type number");
        if(typeof _y !== "number") throw new Error("Property \"_y\" must be of type number");
        if(typeof _type !== "string") throw new Error("Property \"_type\" must be of type string");
        this.path = "./res/" + _path;
        let img = new Image();
        if (_path.length > 0) {
            img.src = this.path;
            this.img = img;
        }

        this.width = this.img.width;
        this.height = this.img.height;
        if(_type === "circle")
            this.radius = this.width/2;
        this.x = _x;
        this.y = _y;
        this.type = _type;
        this.ctx = _scene.getContext();
    }

    // This will assume the is either a sprite, or a rect
    static checkCollide(obj1, obj2) {
        if(obj1.type === "rect" && obj2.type === "rect") {
            if((obj1.x + obj1.width > obj2.x && obj1.x < obj2.x + obj2.width)
            && (obj1.y + obj1.height > obj2.y && obj1.y < obj2.y + obj2.height)) return true;
        } else if(obj1.type === "circle" && obj2.type == "circle") {
            // For this calc, the circle's position is assumed to be the centre. The circles pos is at the top left but the calculation will still work
            let run = obj2.x - obj1.x;
            let rise = obj2.y - obj1.y;
            if(Math.sqrt(run * run + rise * rise) <= obj1.radius + obj2.radius) return true;
        }
        return false;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }
}