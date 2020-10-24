class Sprite {
    constructor(_scene, _path, _x, _y) {
        this.path = "./res/" + _path;
        let img = new Image();
        img.src = this.path;
        this.img = img;

        this.x = _x;
        this.y = _y;
        this.ctx = _scene.getContext();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }
}