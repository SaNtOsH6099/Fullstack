function oddEven(num) {
    if (num % 2 == 0) { // if the remainder is 0 then its even
        console.log("The number ", num, " is even");
    } else {
        console.log("The number ", num, " is odd");
    }
}
export { oddEven } // exporting the function