let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500);

let person = new Sprite(scene, "testImage.png", 0, 0);

function setup() {
    scene.bgColor = "rgb(184, 184, 184)";
}

function draw() {
    scene.clear(false);
    person.draw();

    let keyDown = getKeyDown();
    if(keyDown === "d") person.x += 2;
    if(keyDown === "a") person.x -= 2;
    if(keyDown === "w") person.y -= 2;
    if(keyDown === "s") person.y += 2;
}