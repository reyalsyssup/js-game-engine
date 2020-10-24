class Sprite {
    constructor(_scene, _path, _x, _y) {
        this.path = "./res/" + _path;
        // create an <img> tag on the html THAT IS HIDDEN for the ctx.drawImage
        let img = document.createElement("img");
        img.style.display = "none";
        img.src = this.path;
        document.querySelector("body").appendChild(img);
        this.img = img;

        this.x = _x;
        this.y = _y;
        this.ctx = _scene.getContext();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }
}