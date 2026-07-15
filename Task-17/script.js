// division function that returns promise
const division = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ternery operation
            (num2 === 0) ? reject("Cannot divide a number by Zero") : resolve(num1 / num2);
        }, 500); // seting small delay for answer

        // what actually happens
        // if (num2 === 0) {
        //     reject("Cannot divide a number by Zero")
        // } else {
        //     resolve(num1 / num2)
        // }
    })
}

// async function to resolve the errors
const start = async (num1, num2) => {
    try {
        console.log(`Dividing ${num1} by ${num2} `);
        const res = await division(num1, num2); // awaits for the promise to be fulfilled
        console.log(`Result :`, res);

    } catch (err) { // catches errors or reject msg
        console.log(`Error :`, err);
    }
}

// double dimension array to test multiple cases at once
const testCases = [
    [9, 3],
    [20, 5],
    [100, 0],
    [7, 2],
    [15, 0]
]

//for loop to call the async function with different values each time
for (let i = 0; i < testCases.length; i++) {
    //set timeout function to call the division one by one
    setTimeout(() => {
        start(testCases[i][0], testCases[i][1]);
    }, 1500 * (i + 1)) // if the time is 1000 fixed then all outputs arrive at the same time
}