var startTime = null;
function start() {
    startTime = Date.now();
    document.body.onkeydown = function() {
        console.log('Stopped');
    }
    console.log('Started');
}

if (confirm('Press ok then if 10 sec passed, press any key.')) {
    start();
}