"use strict";

// let scriptName = prompt(`What is the "official" name of JavaScript?`, `I don't know`);

// if (scriptName === `ECMAScript`) {
//     alert(`Right!`);
// } else {
//     alert(`Didn’t know? ECMAScript!`);    
// }

// let num = prompt(`Give me a number!`, `0`);

// if (num == 0) {
//     alert(0);
// } else if (num > 0) {
//     alert(1);
// } else {
//     alert(-1);
// }

// let username = prompt(`Who's there?`, `No one`);

// if (username == `Admin`) {
//     let password = prompt(`Password?`, ``)
    
//     if (password == `TheMaster`) {
//         alert(`Welcome!`);
//     } else if (password == `` || password == null) {
//         alert(`Canceled!`);
//     } else {
//         alert(`Wrong passwrod!`)
//     }
// } else {
//     alert(`I don't know you!`);
// }

// let result = (a + b < 4) ? 'Below' : 'Over';


let login = prompt(`Who's there?`, `No one`);
let message = 
    login == 'Employee' ? 'Hello' :
    login == 'Director' ? 'Greetings' :
    login == '' ? 'No login' 
        : '';

alert(message);