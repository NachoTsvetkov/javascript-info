"use strict";

let age = prompt("Enter your age!", 18);

// let ageIsAppropriate = age >= 14 && age <= 90;
// let ageIsAppropriate = age <= 14 && age >= 90;
let ageIsAppropriate = !(age >= 14 && age <= 90);

if (ageIsAppropriate) {
    alert("Your age is appropriate");
} else {
    alert("Your age is inappropriate");
}