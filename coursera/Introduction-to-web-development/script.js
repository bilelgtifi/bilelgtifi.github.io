function validateFirstname() {
    var firstname = document.getElementById("firstname").value;
    var re = /^[a-zA-Z\s\'-]{2,15}$/;

    if(re.test(firstname)){
        document.getElementById("firstname-test").style.color = "green";
        document.getElementById("firstname-test").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("firstname-test").style.color = "red";
        document.getElementById("firstname-test").innerHTML = "<strong>Enter 2-15 characters</strong>";
        return false;
    }
}
function validateLastname() {
    var lastname = document.getElementById("lastname").value;
    var re = /^[a-zA-Z\s\'-]{2,15}$/;

    if(re.test(lastname)){
        document.getElementById("lastname-test").style.color = "green";
        document.getElementById("lastname-test").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("lastname-test").style.color = "red";
        document.getElementById("lastname-test").innerHTML = "<strong>Enter 2-15 characters</strong>";
        return false;
    }
}
function validatePassword() {
    var email = document.getElementById("password").value;
    var re = /^[a-zA-Z\s\'-]{8,30}$/;

    if(re.test(email)){
        document.getElementById("password-test").style.color = "green";
        document.getElementById("password-test").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("password-test").style.color = "red";
        document.getElementById("password-test").innerHTML = "<strong>Enter 8-30 characters</strong>";
        return false;
    }
}
function validatePhone() {
    var email = document.getElementById("phone").value;
    var re = /^\d{3}-\d{3}-\d{4}$/;

    if(re.test(email)){
        document.getElementById("phone-test").style.color = "green";
        document.getElementById("phone-test").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("phone-test").style.color = "red";
        document.getElementById("phone-test").innerHTML = "<strong>xxx-xxx-xxxx</strong>";
        return false;
    }
}

function show(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;

    document.getElementById("information").innerHTML = "<p>"+firstname+"</p>";
    document.getElementById("information").innerHTML += "<p>"+lastname+"</p>";
    document.getElementById("information").innerHTML += "<p>"+email+"</p>";
    document.getElementById("information").innerHTML += "<p>"+password+"</p>";
    document.getElementById("information").innerHTML += "<p>"+age+"</p>";
    document.getElementById("information").innerHTML += "<p>"+phone+"</p>";
}