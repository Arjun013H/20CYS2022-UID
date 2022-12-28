function scrollIt(){
    window.scrollTo({ top: 0, behavior: 'smooth' })

}
myBtn.onclick = () => scrollIt()

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






function NameCheck() {
    var x = document.getElementById("Capname").value;
        var nameRegex = /^[a-zA-Z ]+$/;
        if (!x.match(nameRegex)) {
            vaidForm = false
            alert("Special character present in Name please remove it")
            document.getElementById("Capname").focus()
        }
        else{
            vaidForm = true
        }
        
    if(vaidForm){
        return true
    }
    else{
        return false
    }
    }

function ValidateEmail() {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]$/g;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
        vaidForm = false
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus()
    }
    else{
        vaidForm = true
    }

    
    if(vaidForm){
        return true
    }
    else{
        return false
    }
}

function PhoneNumberCheck() {

    var x = document.getElementById("phonenumber").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        vaidForm = false
        alert("Not a valid Phone Number")
        document.getElementById("phonenumber").focus()
    }
    else{
        vaidForm = true
    }

    
    if(vaidForm){
        return true
    }
    else{
        return false
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

    var vaidForm = true
    if (y > 8) {
        Lendoc.classList.remove("invalid")
        Lendoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Lendoc.classList.remove("valid")
        Lendoc.classList.add("invalid")
        vaidForm = false
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
        vaidForm = false
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
        vaidForm = false
    }


    if (!!x.match(lower)) {
        Lpdoc.classList.remove("invalid")
        Lpdoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Lpdoc.classList.remove("valid")
        Lpdoc.classList.add("invalid")
        vaidForm = false
    }


    if (!!x.match(number)) {
        Nudoc.classList.remove("invalid")
        Nudoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Nudoc.classList.remove("valid")
        Nudoc.classList.add("invalid")
        vaidForm = false
    }



    if (!!x.match(sp)) {
        Spdoc.classList.remove("invalid")
        Spdoc.classList.add("valid")
        vaidForm = true
    }
    else {
        Spdoc.classList.remove("valid")
        Spdoc.classList.add("invalid")
        vaidForm = false
    }

    
    if(vaidForm){
        return true
    }
    else{
        return false
    }

}


function passCh() {
    var p1 = document.getElementById("password").value
    var p2 = document.getElementById("confirmpassword").value
    if (p1 != p2) {
        vaidForm = false
        alert("Password is Not Same")
        document.getElementById("confirmpassword").focus()
    }
    else{
        vaidForm = true
    }

    if(vaidForm){
        return true
    }
    else{
        return false
    }
}

function validAll(){
    // window.open("./login.html")
    if (NameCheck()  && PhoneNumberCheck() && PasswordCheck() && passCh()){
        alert("Submitted Successfully")
        window.open("./login.html")
    }
    else{
        // window.open("./login.html")
        return false
    }
}




