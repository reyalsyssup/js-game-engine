let keyDown;
let requested = false;

window.addEventListener("keydown", event => {
    keyDown = event.key;
});

window.addEventListener("keyup", () => {
    keyDown = undefined;
});

function getKeyDown() {
    requested = true;
    return tick();
}

function tick() {
    if(requested) return keyDown;
}