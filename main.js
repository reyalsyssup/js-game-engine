let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500);

let person = new Sprite(scene, "testImage.png", 0, 0);

function setup() {
    scene.bgColor = "rgb(184, 184, 184)";
}

function draw() {
    scene.clear(false);
    person.draw();

    let keys = getKeyDown();
    for(let key of keys) {
        if(key === "d") person.x += 2;
        if(key === "a") person.x -= 2;
        if(key === "w") person.y -= 2;
        if(key === "s") person.y += 2;
    }
}

scene.run(setup, draw);