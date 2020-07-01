var startTime = null;
function start() {
    startTime = Date.now();
    console.log('Started');
}

if (confirm('Press ok then if 10 sec passed, press any key.')) {
    start();
}