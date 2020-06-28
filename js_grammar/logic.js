/*
var age = 75;
var isMember = true;
var result = null;
if (age >= 60 && isMember) {
    result = 'シニア会員割引の対象です';

} else {
    result = 'シニア会員割引の対象ではありません';
}
document.write(result);
*/

var age = 16;
var isMember = true;
var price = null;

if (age <= 15) {
    price = 800;
} else if (age >= 16 && isMember == true) {
    price = 1000;
} else { 
    price = 1800;
}

document.write(price);