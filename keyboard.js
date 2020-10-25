let keyDown;
let requested = false;
let keyLog = [];

let mouse = {x: 0, y: 0};

function setMouse(event) {
    let rect = canvas.getBoundingClientRect();
    mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

window.addEventListener("mousemove", event => setMouse(event));

window.addEventListener("keydown", event => {
    keyDown = event.key;
    // Prevents duplication of keys in keylog
    let counter = 0;
    let alreadyIn = false;
    for(let i = 0; i < keyLog.length; i++) {
        if(keyLog[i] === keyDown) counter++;
        if(counter > 0) {
            alreadyIn = true;
            break;
        }
    }
    if(!alreadyIn) keyLog.push(keyDown);
});

window.addEventListener("keyup", event => {
    for(let i = 0; i < keyLog.length; i++) {
        if(keyLog[i] === event.key) {
            keyLog.splice(i, 1);
        }
    }
});

function getKeyDown() {
    return keyLog;
}