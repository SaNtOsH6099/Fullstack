let arr = [12, 34, 53, 15, 87, 13, 36]; // dummy array


// Normal function to Find the maximum number in the array
function findMaxNum(arr) {
    let max = arr[0]; //stores first value to compare everything later
    for (let i = 0; i < arr.length; i++) { // loop from 0 to n-1 index
        if (arr[i] > max) { // if a index is more than max
            max = arr[i];   // then store the index value in max
        }
    }
    return max; // return max after the loop ends
}
console.log(`Maximum number : ${findMaxNum(arr)}`);


// Anonymous function to find Sum of all elements in the array
let arrSum = function (arr) {
    let sum = 0; // initialize sum 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // keep adding every index value until loop ends
    }
    return sum; //return the final sum 
}
console.log(`Sum of all elements : ${arrSum(arr)}`);



// Arrow function to count odd numbers in an array
let countOdd = (arr) => {
    let count = 0; // counter for odd numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) // if number is no divisible by 2
            count++; // increments the counnter
    }
    return count; //return final count
}
console.log(`Count of odd numbers : ${countOdd(arr)}`);
