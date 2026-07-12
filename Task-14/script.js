// different numbers to test
let num1 = 20;
let num2 = 153;
let num3 = 121;
let num4 = 37;
let num5 = 61;

let num = num1; // change this to get results for different numbers

// Sum of first n digits 
console.log(`Number : ${num} `);
let sum = 0; // starting sum with 0
for (let i = 1; i <= num; i++) {
    sum = sum + i; // keeps adding the value of i until it becomes same as num
}
console.log(`Sum of first ${num} digits : ${sum}`);


// Table of n ----------------------
console.log(`Table of ${num} :`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// Checking prime number
let count = 0; // for counting factors
if (num <= 1) { // prime numbers start from 2
    console.log(`Is it a prime number? No`)
} else {
    for (let i = 1; i < num; i++) { //run from 1 to n-1
        if (num % i == 0) {
            count++; // increament if factor exists
        }
    }
    if (count > 1) { // check if only 1 factors which is 1
        console.log(`Is it a prime number? No`)
    } else {
        console.log(`Is it a prime number? Yes`)
    }
}

// printing Factors of num

let factors = "1"; // string variable to print output in single line
// 1 is factor of every number so its already present
for (let i = 2; i <= num; i++) { // loop skipping 1 because it already exist
    if (num % i == 0) {
        factors += `, ${i}`; // "" = "" + i
    }
}
console.log(`Factors: ${factors}`);


// Sum of its digits
let temp = num; // copy the num to perform operations
sum = 0; // re initialize sum
let remainder = 0; // to store last digit


while (temp > 0) { // runs until temp becomes 0
    remainder = temp % 10; // stores last digit
    sum = sum + remainder; // normal sum of digits
    temp = Math.floor(temp / 10); // removes last digit
}
console.log(`Sum of its digits: ${sum}`);

// Armstrong number 
temp = num;  // re initialize temp
remainder = 0; // re initialize remainder
let cubeAndSum = 0; // for cubing digits and sum them

while (temp > 0) {
    remainder = temp % 10;
    cubeAndSum = cubeAndSum + remainder ** 3; //cubing digits and sum them
    temp = Math.floor(temp / 10);
}

if (cubeAndSum == num) {
    console.log(`Is it an Armstrong number? Yes`)
} else {
    console.log(`Is it an Armstrong number? No`)

}