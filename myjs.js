// This function is used to select dom elements on the dom
function domSelector(node) {
    return document.querySelector(node);
};

const button = domSelector('button');
console.log(button)
const formField = domSelector('.serch-controls');


// <===EVENT FOR EMAIL VALIDATION===>
button.addEventListener('click', () => {
    // Dom Elements
    const error = document.querySelector('.erro');
    const errorIcon = document.querySelector('.error-icon');
    const email = domSelector('input').value.trim();

    // Functions to Add  Class
    let classChanger = () => {
        error.style.opacity = "100%";
        errorIcon.style.opacity = "100%";
        error.style.color = " rgb(255, 102, 102)";
        error.innerHTML = "Please provide an email";
        console.log('Erro');
        console.log('No Email');
    }

    // Function to match pattern
    let validation = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            console.log("email matches")
            error.style.opacity = "100%";
            error.style.color = "green";
            error.innerHTML = "Valid Email Address";
            errorIcon.style.opacity = "0%";
            domSelector('input').value = "";
        } else {
            error.style.opacity = "100%";
            errorIcon.style.opacity = "100%";
            error.innerHTML = "Invalid Email Address";
            return console.log('invalid Email')
        }
    }

    // Function to remoe erro
    let removeChange = () => {
        error.style.opacity = "0%";
        errorIcon.style.opacity = "0%";
        console.log('Success');
        console.log(' Email recieved');
        // Clear Dom Value
        domSelector('input').value = "";
    }

    // Conditional Statements
    (email == "") ? classChanger():
        email ? validation() :
        removeChange();




})