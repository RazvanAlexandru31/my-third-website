let form = document.getElementById("form");
let firstName = document.getElementById("firstname");
let secondName = document.getElementById("secondname");
let email = document.getElementById("email");
let phoneNr = document.getElementById("phone")
let time = document.getElementById("time")
let date = document.getElementById("date")
let today = new Date().toLocaleDateString()
console.log(today)

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if(firstName.value.trim() === "" || firstName.value.trim().length < 3 || !isNaN(firstName.value.trim())) {
        whenError(firstName, "Please enter a valid name")   
    } else {
        whenSuccess(firstName, "All seems good")
    }

    if(secondName.value.trim() === "" || secondName.value.trim().length < 3 || !isNaN(secondName.value.trim())) {
        whenError(secondName, "Please enter a valid name")   
    } else {
        whenSuccess(secondName, "All seems good")
    }

    if(firstName.value.trim() === secondName.value.trim()){
        whenError(firstName, "First name must be different from second name")
    } else {
        whenSuccess
    }

    if(secondName.value.trim() === firstName.value.trim()){
        whenError(secondName, "Second name must be different from first name")
    } else {
        whenSuccess
    }

    if(email.value.trim() === "") {
        whenError(email, "Please enter a valid email")   
    } else if (!emailError(email.value.trim())) {
        whenError(email, "Email is not valid")
    } else {
        whenSuccess(email, "All seems good")

    }

    if(phoneNr.value.trim() === ""){
        whenError(phoneNr, "Phone number can't be blank")
    } else if (isNaN(phoneNr.value.trim())) {
        whenError(phoneNr, "Enter a valid number")
    } else if (phoneNr.value.trim().length < 10) {
        whenError(phoneNr, "Phone number needs 10 digits")
    } else {
        whenSuccess(phoneNr, "All seems good")
    }

    if(date.value === "") {
        whenError(date, "Select the date")
    } else if (date.value < today) {
        whenError(date, "Unable to book for a date that already passed")
    } else if (date.value >= today) {
        whenSuccess(date, "All seems good")
    } 

    if(time.value === "") {
        whenError(time, "Select the time of you're arrival")
    } else {
        whenSuccess(time, "All seems good")
    }
});







function whenError(input, message) {
    let formHero = input.parentElement;
    let small = formHero.querySelector("small"); 
    small.innerText = message;
    formHero.className = "hero-form error";
}

function whenSuccess(input, message) {
    let formHero = input.parentElement
    let small = formHero.querySelector("small"); 
    small.innerText = message;
    formHero.className = "hero-form success";
}

function emailError(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}