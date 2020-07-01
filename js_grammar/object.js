var startTime = null;
var displayArea = document.getElementById('display-area');
function start() {
    startTime = Date.now();
    document.body.onkeydown = stop;
}

function stop() {
    var currentTime = Date.now();
    var seconds = (currentTime - startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        displayArea.innerText = 'Wow, you pressed in' + seconds + 'seconds!';
    } else {
        displayArea.innerText = 'Oops, you pressed in' + seconds + 'seconds.'
    }
}

if (confirm('Press ok then if 10 sec passed, press any key.')) {
    start();
}