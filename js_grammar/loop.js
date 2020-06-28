/* for (var i = 1; i < 100001; i++) {
    document.write(i + ' ');
} */

for (var i = 1; i < 100001; i++){
    if (i % 3 == 0) {
        document.write('Fizz ')
    } else if (i % 5 == 0) {
        document.write('Buzz')
    } else if (i % 15 == 0) {
        document.write('FizzBuzz ')
    } else document.write(i + ' ')
}