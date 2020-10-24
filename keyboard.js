let keyDown;
let requested = false;
let keyLog = [];

window.addEventListener("keydown", event => {
    keyDown = event.key;
    // Prevents duplication of keys in keylog
    let counter = 0;
    let alreadyIn = false;
    console.log("before", keyLog);
    for(let i = 0; i < keyLog.length; i++) {
        if(keyLog[i] === keyDown) counter++;
        if(counter > 0) {
            alreadyIn = true;
            break;
        }
    }
    console.log("after", keyLog);
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