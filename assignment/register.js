function NameCheck() {
    var x = document.getElementById("Capname").value;
        var nameRegex = /^[a-zA-Z ]+$/;
        if (!x.match(nameRegex)) {
            alert("Special character present in Name please remove it")
            document.getElementById("Capname").focus()
        }
    }

function ValidateEmail() {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]$/g;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus()
    }
}

function PhoneNumberCheck() {

    var x = document.getElementById("phonenumber").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        alert("Not a valid Phone Number")
        document.getElementById("phonenumber").focus()
    }
}

function PasswordCheck() {
    var Lendoc = document.getElementById("Len")
    var Updoc = document.getElementById("Up")
    var Lpdoc = document.getElementById("Lp")
    var Nudoc = document.getElementById("Nu")
    var Spdoc = document.getElementById("Sp")
    var x = document.getElementById("password").value
    const upper = /[A-Z]/g
    const lower = /[a-z]/g
    const number = /[0-9]/g
    const sp = /[!@#$%^&*()]/g
    const y = x.toString().length

    if (y > 8) {
        Lendoc.classList.remove("invalid")
        Lendoc.classList.add("valid")
    }
    else {
        Lendoc.classList.remove("valid")
        Lendoc.classList.add("invalid")
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
    }


    if (!!x.match(lower)) {
        Lpdoc.classList.remove("invalid")
        Lpdoc.classList.add("valid")
    }
    else {
        Lpdoc.classList.remove("valid")
        Lpdoc.classList.add("invalid")
    }


    if (!!x.match(number)) {
        Nudoc.classList.remove("invalid")
        Nudoc.classList.add("valid")
    }
    else {
        Nudoc.classList.remove("valid")
        Nudoc.classList.add("invalid")
    }



    if (!!x.match(sp)) {
        Spdoc.classList.remove("invalid")
        Spdoc.classList.add("valid")
    }
    else {
        Spdoc.classList.remove("valid")
        Spdoc.classList.add("invalid")
    }

}


function passCh() {
    var p1 = document.getElementById("password").value
    var p2 = document.getElementById("confirmpassword").value
    if (p1 != p2) {
        alert("Password is Not Same")
        document.getElementById("confirmpassword").focus()
    }

}






