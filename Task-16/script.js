const students = [
    { name: "Rahul Sharma", marks: 92, class: "12A", address: "Delhi" },
    { name: "Priya Singh", marks: 85, class: "11B", address: "Mumbai" },
    { name: "Amit Kumar", marks: 78, class: "10C", address: "Kolkata" },
    { name: "Neha Verma", marks: 95, class: "12A", address: "Bengaluru" },
    { name: "Arjun Patel", marks: 88, class: "11A", address: "Ahmedabad" },
    { name: "Sneha Das", marks: 81, class: "10B", address: "Bhubaneswar" },
    { name: "Rohan Gupta", marks: 74, class: "9A", address: "Lucknow" },
    { name: "Anjali Mehta", marks: 90, class: "12B", address: "Jaipur" },
    { name: "Karan Joshi", marks: 69, class: "9C", address: "Pune" },
    { name: "Pooja Yadav", marks: 87, class: "11C", address: "Patna" },
    { name: "Vikram Roy", marks: 76, class: "10A", address: "Ranchi" },
    { name: "Meera Nair", marks: 94, class: "12C", address: "Kochi" },
    { name: "Sahil Khan", marks: 83, class: "11A", address: "Hyderabad" },
    { name: "Kavya Iyer", marks: 91, class: "12B", address: "Chennai" },
    { name: "Nitin Malhotra", marks: 72, class: "10B", address: "Chandigarh" },
    { name: "Simran Kaur", marks: 89, class: "11B", address: "Amritsar" },
    { name: "Aditya Mishra", marks: 80, class: "10C", address: "Varanasi" },
    { name: "Riya Chatterjee", marks: 96, class: "12A", address: "Kolkata" },
    { name: "Harsh Jain", marks: 77, class: "9B", address: "Indore" },
    { name: "Tanvi Sharma", marks: 84, class: "11C", address: "Nagpur" }
];
console.log(students);

const container = document.querySelector(".container"); // the html container div which will show the studeent info
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

let studentCards = students.map((student) => {

    // format to show in html
    return `
    <div class="card">
        <p>Student Name: ${student.name}</p>
        <p>Marks : ${student.marks}</p>
        <p>Class: ${student.class}</p>
        <p>Address: ${student.address}</p>
    </div>`
})

container.innerHTML = studentCards.join(""); // default filler for student info in container

search.addEventListener("input", () => { // input event listener will work with each typing

    const searchVal = search.value.toLowerCase(); // making the input lower case for convenience.

    // filter to only store objects that matches certain criteria
    const matched = students.filter(student => {
        return student.name.toLowerCase().includes(searchVal);
    }//making all the student names lower case to check if they container the input value
    )

    container.innerHTML = ""; // empty the container or else the matched cards will append .

    console.log(matched);//checking for errors

    // mapping all matched students and storing their display format
    const matchedStudents = matched.map(student => {
        return `
    <div class="card">
        <p>Student Name: ${student.name}</p>
        <p>Marks : ${student.marks}</p>
        <p>Class: ${student.class}</p>
        <p>Address: ${student.address}</p>
    </div>`
    })

    container.innerHTML = matchedStudents.join(""); // finally adding everyhing to the container

    if (search.value === "") { // if there is no input value
        container.innerHTML = studentCards.join(""); // the container reverts to original state.
    }

    if (matched.length === 0) { // if no student matches 
        container.innerHTML = '<p class="none">No student found</p>'
    }
})


