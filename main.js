let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500);

function setup() {
    scene.bgColor = "rgb(184, 184, 184)";
}

function draw() {
    scene.clear(false);
}