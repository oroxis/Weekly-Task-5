
function validateForm() {
    let f = document.forms["firstName"].value;
    let l = document.forms["lastName"].value;
    if (f == l) {
        alert ('First name and Last name must be different');
        return false;
    }
}

function validateForm() {
    let pw = document.forms["pass"].value;
    let pr = document.forms["repass"].value;
    if (pw !== pr) {
        alert ('Password did not match');
        return false;
    }   else {
        alert("done");
    }
}