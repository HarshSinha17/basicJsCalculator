
var inp = document.getElementById(
 "inp");

function put(digit) {
 inp.value += digit;
}

function putdot() {
 inp.value = "";
}

function clear() {
 inp.value = ".";
}

function putoperplus() {
 inp.value += "+";
}

function putoperminus() {
 inp.value += "-";
}

function putoperdiv() {
 inp.value += "/";
}

function putoperinto() {
 inp.value += "*";
}

function calculate() {
 var res = eval(inp.value);
 inp.value = res;
}
