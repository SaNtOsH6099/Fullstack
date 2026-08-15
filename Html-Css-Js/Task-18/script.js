const heading = document.querySelector(".heading"); // header greeting
const boxes = document.querySelectorAll(".box"); // all boxes
const input = document.querySelector(".input"); // user input 
const btn = document.querySelector(".greet-button"); // button

// giving every box event listener click at once to reduce redundancy
// map doesnt work becuase its not an array
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // store the text to use for colouring background
        const colour = box.textContent.toLowerCase();

        // toggle color on and off 
        // check box colour is same as its text 
        if (box.style.backgroundColor === colour) {
            box.style.backgroundColor = "";
            // if yes then revert the inline css
        } else {
            // if no then apply the same colour as text
            box.style.backgroundColor = colour;
        }
    })
})


btn.addEventListener("click", () => {
    const userInput = input.value; // store the value input
    if (userInput !== "") { // if input is not empty
        heading.innerHTML = `Hello, ${userInput}`; //then change the heading
    }

})

// revert the heading if the input is empty after the user removes text
input.addEventListener("input", () => {
    if (input.value === "") {
        heading.innerHTML = `Hello`;
    }
})