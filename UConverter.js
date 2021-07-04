const meters = document.getElementById('meter');

meters.addEventListener("input", unitConverterM);
function unitConverterM(e) {
    let meter = e.target.value;

    document.getElementById('feets').value = meter * 3.2808; //to feet
    document.getElementById('inches').value = meter * 39.370; //to inch
    document.getElementById('yards').value = meter * 1.0936; // to yard
}

const feets = document.getElementById("feets");
feets.addEventListener("input", unitConverterF);
function unitConverterF(e) {
    let feets = e.target.value;
    document.getElementById('meter').value = feets / 3.2808; //to meter
    document.getElementById('inches').value = feets * 12; //to inch
    document.getElementById('yards').value = feets * 0.33333; // to yard
}

const inches = document.getElementById("inches");
inches.addEventListener("input", unitConverterI);
function unitConverterI(e) {
    let inches = e.target.value;
    document.getElementById('meter').value = inches / 39.370; //to meter
    document.getElementById('feets').value = inches * 0.083333; //to feet
    document.getElementById('yards').value = inches * 0.027778; // to yard
}

const yards = document.getElementById("yards");
yards.addEventListener("input", unitConverterY);
function unitConverterY(e) {
    let yards = e.target.value;
    document.getElementById('meter').value = yards / 1.0936; //to meter
    document.getElementById('feets').value = yards * 3; //to feet
    document.getElementById('inches').value = yards * 36; // to inches
}