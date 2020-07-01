var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function () {
        startTime = Date.now();
        document.body.onkeydown = game.stop;
    },
    stop: function () {
        var currentTime = Date.now();
        var seconds = (currentTime - game.startTime) / 1000;

        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = 'Wow, you pressed in' + seconds + 'seconds!';
        } else {
            game.displayArea.innerText = 'Oops, you pressed in' + seconds + 'seconds.'
        }
    }
}

if (confirm('Press ok then if 10 sec passed, press any key.')) {
    game.start();
}