let userDetailsDatabase = {}

function getUserDetails() {
    let userName = prompt("Enter your username")
    if (userName == null){
        return 
    }
    function validateUserName(userName) {
        if (userName.length < 10 && userName.length > 0) {
            return true
        } else {  
            return false
        }
    }

    while(validateUserName(userName) == false){
        userName = prompt("username must be less than ten and greater than zero")
    }
    userDetailsDatabase["Username"] = userName
    let email = prompt("Enter your email address")
    if (email == null){
        return 
    }
    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true) {
            return true
        } else {
            return false
        }
    }
    while(validateEmail(email == false)){
        email = prompt("Enter a valid email")
    }
    userDetailsDatabase["Email"] = email

    let phoneNumber = prompt("Enter your digit")
    if (phoneNumber == null){
        return 
    }
    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) { 
            return true
        } else {
            return false
        }
    }
    while(validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("The digit must be eqaul to eleven")
    }
    userDetailsDatabase["PhoneNumber"] = phoneNumber
//phone Number    
    let password = prompt("Enter your password")
    if (password == null){
        return 
    }

    function validatePassword(password) {
        if (password.length < 6) {
            return false
        } else {
            return true
        }
    }
    while(validatePassword(password) == false){
        password = prompt("Your password must be greater than 6 characters")
    }
    userDetailsDatabase["Password"] = password
    let confirmPassworld = prompt("Confirm your password")
    if (confirmPassworld == null){
        return 
    }
    function validateConfirmPassword(password) {
        if (confirmPassworld != password) {
            return false
        } else {
            return true
        }
    }
    while(validateConfirmPassword(confirmPassworld) == false){
        confirmPassworld = prompt("Your password did not match")
    }
    userDetailsDatabase["Confirm Password"] = confirmPassworld

}

function displayUserDetail(){
    alert(`Your details\n\nUsername: ${userDetailsDatabase.Username}\n\n
    Phone Number: ${userDetailsDatabase.PhoneNumber}\n
    Email: ${userDetailsDatabase.Email}\n 
    Password: ${userDetailsDatabase.Password}`)

}
 