var startTime = null;
function start() {
    startTime = Date.now();
    document.body.onkeydown = stop;
    console.log('Started');
}

function stop() {
    console.log('Stopped')
}

if (confirm('Press ok then if 10 sec passed, press any key.')) {
    start();
}