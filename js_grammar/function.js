/* var myBirthTime = new Date(1982, 11, 17, 12,30);
function updateParagraph() {
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText =
        '生まれてから' + seconds + '秒経過'
}
setInterval(updateParagraph, 50); */

function circleArea (r) {
    return r * r * 3.14;
}

document.write('<p>r = 5' + circleArea(5) + '</p>');
document.write('<p>r = 10' + circleArea(10) + '</p>');
document.write('<p>r = 15' + circleArea(15)+ '</p>');