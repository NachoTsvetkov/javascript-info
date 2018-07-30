"use strict";

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
// }

function checkAge(age) {
    return age > 18 || confirm('Do you have your parents permission to access this page?');
}

// checkAge(prompt('Age?', 18));

function min(a, b) {
    return a > b ? b : a;
}

console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

function pow(a, b) {
    return a ** b;
}

console.log(pow(3, 2) == 9);
console.log(pow(3, 3) == 27);
console.log(pow(1, 100) == 1);
