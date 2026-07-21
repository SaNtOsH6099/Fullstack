// All services info stored 
const services = [
    { name: "Dry Cleaning", price: 200.00, img: "./img/dry-clean.png", alt: "Dry cleaning service image" },
    { name: "Leather & Suede Cleaning", price: 999.00, img: "./img/leather.png", alt: "Leather and suede cleaning service image" },
    { name: "Ironing", price: 30.00, img: "./img/iron.png", alt: "Ironing service image" },
    { name: "Wedding Dress Cleaning", price: 2400.00, img: "./img/wed-clean.png", alt: "Wedding dress cleaning service image" },
    { name: "Wash and Fold", price: 140.00, img: "./img/wash-fold.png", alt: "Wash and fold laundry service image" },
    { name: "Stain Removal", price: 500.00, img: "./img/stain.png", alt: "Stain removal service image" }
];

const tableBody = document.querySelector(".table-body"); // tbody to print rows in table
const noItemsText = document.querySelector(".no-info-container"); // no items added text container
const serviceImg = document.querySelector(".service-img"); // service image
const serviceName = document.querySelector(".service-name"); // service name
const serviceAmount = document.querySelector(".service-amount"); // service price
const skipBtn = document.querySelector(".skip-btn"); // skip button
const addBtn = document.querySelector(".add-btn"); // add to cart button
const amount = document.querySelector(".price"); // total amount displayed 
const cartItems = []; // items added in the cart

let index = 0; // this is for displaying the current services index
let totalAmount = 0; // calculating total amount of all services added


skipBtn.addEventListener("click", () => {
    index += 1; // when clicked index increments

    if (index < services.length) { // if index is less than no.of services
        //updates the services
        serviceImg.src = services[index].img;
        serviceName.textContent = services[index].name;
        serviceAmount.textContent = `₹${services[index].price.toFixed(2)}`;
    } else { // if index in not less than services
        skipBtn.disabled = true; // disable the skip button
    }

})
addBtn.addEventListener("click", () => {

    cartItems.push(services[index]); // add the current index service to the cart
    totalAmount += services[index].price; // calculate the price .
    amount.innerText = `₹${totalAmount.toFixed(2)}`; // update display amount

    //same logic as skip button below
    index += 1;
    if (index < services.length) {
        serviceImg.src = services[index].img;
        serviceName.textContent = services[index].name;
        serviceAmount.textContent = `₹${services[index].price.toFixed(2)}`;
    } else {
        addBtn.disabled = true;
    }

    //render the table to display the items added
    addItemToCart();
})

const addItemToCart = () => { // function to render rows in table
    tableBody.innerHTML = ""; //empty table body each time
    noItemsText.innerHTML = ""; //empty the no items text

    cartItems.forEach((item, index) => { // add rows for each service added
        tableBody.innerHTML += `<tr>
                                <td>${index + 1}</td>
                                <td>${item.name}</td>
                                <td>₹${item.price.toFixed(2)}</td>
                            </tr>`
    });
} 