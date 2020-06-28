/* var classes = ['A組', 'B組', 'C組', 'D組'];

for (var grade = 1; grade < 4; grade++) {
    for (var i = 0; i < classes.length; i++) {
        // make <p>○年○組</p>
        document.write('<p>' + grade + '年' + classes[i] + '</p>');
    }
    
} */

var hiraganas = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var i = 0; i < hiraganas.length; i++) {
    for (var j = 0; j < hiraganas.length; j++) {
        document.write('<p>' + hiraganas[i] + hiraganas[j] + '</p>')
    }
}