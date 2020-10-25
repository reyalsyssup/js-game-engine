class Sprite {
    constructor(_scene, _path, _x, _y, _type) {
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