const navBtn = document.querySelector(".hamburger"); // hamburger button
const hiddenNav = document.querySelector(".hidden-nav-links-container"); // hidden nav container
const closeBtn = document.querySelector(".close-btn"); // close button inside the hidden navbar


//adding slide in class on clicking hamburger button and removing slide out
navBtn.addEventListener("click", () => {
    hiddenNav.classList.add("slide-in");
    hiddenNav.classList.remove("slide-out");

})

//adding slide out class on clicking close button (x) button and removing slide in
closeBtn.addEventListener("click", () => {
    hiddenNav.classList.add("slide-out");
    hiddenNav.classList.remove("slide-in");
})

