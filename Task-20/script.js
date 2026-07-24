import { sendEmail } from "./email.js";

// list of all services
const services = [
    { id: 1, name: "Dry Cleaning", price: 200.00, img: "./img/dry.png", alt: "Dry cleaning icon", inCart: false },
    { id: 2, name: "Leather & Suede Cleaning", price: 999.00, img: "./img/leather.png", alt: "Leather and suede cleaning icon", inCart: false },
    { id: 3, name: "Ironing", price: 30.00, img: "./img/iron.png", alt: "Ironing service icon", inCart: false },
    { id: 4, name: "Wedding Dress Cleaning", price: 2400.00, img: "./img/wed.png", alt: "Wedding dress cleaning service icon", inCart: false },
    { id: 5, name: "Wash and Fold", price: 140.00, img: "./img/wash.png", alt: "Wash and fold laundry service icon", inCart: false },
    { id: 6, name: "Stain Removal", price: 500.00, img: "./img/stain.png", alt: "Stain removal service icon", inCart: false }
];

// container to show all services
const serviceList = document.querySelector(".service-list");
//adding all services one by one
services.forEach((service, index) => {
    serviceList.innerHTML += `
    <div class="service-item">
        <div class="service">
            <div class="service-icon">
               <img src="${service.img}" alt=${service.alt} class="icon-img">
               </div>
            <div class="service-name">${service.name}</div>
            <div class="service-cost"> • ₹${service.price.toFixed(2)}</div>
        </div>
        <div class="service-btn">
            <button class="add-btn" data-id="${service.id}">
                Add item <i class="fa-regular fa-square-plus"></i>
            </button>
            </div>
    </div>`
})

const cartButtons = document.querySelectorAll(".add-btn"); // all add to cart buttons 
let cart = []; // empty cart by default

const tableBody = document.querySelector(".table-body"); // rendering added items here
const noItems = document.querySelector(".no-items-text"); // text when no items added
const totalAmount = document.querySelector(".price"); // total amount at the bottom of table
const bookBtn = document.querySelector(".book-btn"); // book now button
const addItemReminder = document.querySelector(".add-items"); // reminder to add items before booking
const emailConfirmation = document.querySelector(".send-email"); // text after successfull email
const form = document.querySelector(".details"); // booking form

const footForm = document.querySelector(".subs-right"); // newsletter form

let sum = 0; // calculating sum of addded services

// loop through all buttons
cartButtons.forEach(button => {
    // add event to all buttons
    button.addEventListener("click", () => {
        const index = Number(button.dataset.id); // index to match and add/remove same item from table
        const service = services.find(service => service.id === index); // filter to get the specific item


        if (service.inCart) { // if service is already in cart 

            button.classList.remove("rem-btn"); // remove the remove item styling
            button.classList.add("add-btn"); // add the styling for add item
            cart = cart.filter((item) => item.id !== service.id) // remove the specific item from cart
            service.inCart = false; // change state to not in cart
            sum -= service.price; // remove the price of the removed service

        } else { // if service not in cart already

            sum += service.price; // add the price of the specific service
            button.classList.add("rem-btn");
            button.classList.remove("add-btn");
            cart.push(service); // add if not in cart
            service.inCart = true; // change state to already in cart
        }

        totalAmount.innerHTML = `${sum.toFixed(2)}`; // display total amount to 2 decimals

        // toggle the button text  based on if it is in cart or not
        const btnText = service.inCart ?
            'Remove item <i class="fa-regular fa-circle-xmark"></i>' :
            'Add item <i class="fa-regular fa-square-plus"></i>';
        button.innerHTML = btnText; // change the text
        displayCart(cart); // render the cart into table

        if (cart.length > 0) { // if cart has anything
            addItemReminder.style.display = "none"; // remove the reminder text
            bookBtn.classList.remove("book-btn-muted") // remove muted styling from book button
        }
    })
})

// styling for showing reminder text and muting book button
bookBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        addItemReminder.style.display = "block";
        bookBtn.classList.add("book-btn-muted")
    }
})

// booking form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // dont reload 
    sendEmail(emailConfirmation, cart); // call send email function
    form.reset(); // reset the form and empty fields
    cart = []; // empty cart
    displayCart(cart); // render cart
})

// newletter form submission
footForm.addEventListener("submit", (e) => {
    e.preventDefault();
    footForm.reset();
})


//render  the added items
const displayCart = (cart) => {
    if (cart.length === 0) {
        noItems.style.display = "block"; // the text showing no items added
    } else {
        noItems.style.display = "none";
    }
    tableBody.innerHTML = "";
    cart.map((service, index) => {

        // blueprint to add rows in table
        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${service.name}</td>
            <td>${service.price.toFixed(2)}</td>
        </tr>`;
    })
}