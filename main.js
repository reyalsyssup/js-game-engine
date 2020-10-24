let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500, "rgb(184, 184, 184)");

function setup() {
    scene.bgColor = "rgb(0, 255, 0)";
}

function draw() {
    scene.clear(false);
}