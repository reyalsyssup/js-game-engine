let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500);

let person = new Sprite(scene, "testImage.png", 0, 0);;

function setup() {
    scene.bgColor = "rgb(184, 184, 184)";
}

function draw() {
    scene.clear(false);
    person.draw();
    person.x += 1;
}