"use strict";

let output = "";
let evenNumbersLimit = 10;

for (let index = 1; index < evenNumbersLimit; index++) {
    if (index % 2 == 0) {
        output += index + ", ";
    }
}

console.log(output);

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

let primesLimit = 0;
while (primesLimit <= 100 && primesLimit != null) {
    primesLimit = prompt(`Enter number greater than 100`);
}

let primes = [];
for (let number = 2; number < primesLimit; number++) {
    let isPrime = true;
    primes.forEach((prime) => {
        if (number % prime == 0) {
            isPrime = false;
        }
    });

    if (isPrime) {
        primes.push(number);
    }
}

console.log(primes);

