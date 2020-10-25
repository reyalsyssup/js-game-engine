let canvas = document.querySelector("canvas");
let scene = new Scene(canvas, 500, 500);

let circle1 = new Sprite(scene, "circle1.png", 20, 300, "circle");
let circle2 = new Sprite(scene, "circle2.png", 200, 300, "circle");

function setup() {
    scene.bgColor = "rgb(184, 184, 184)";
}

function draw() {
    scene.clear(false);
    circle1.draw();
    circle2.draw();

    let keys = getKeyDown();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    // console.log("circles", Sprite.checkCollide(circle1, circle2));
    for(let key of keys) {
        if(key === "d") circle1.x += 2;
        if(key === "a") circle1.x -= 2;
        if(key === "w") circle1.y -= 2;
        if(key === "s") circle1.y += 2;
    }
}

scene.run(setup, draw);