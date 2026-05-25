let display = document.getElementById("display")
let calculatebhayo = 0;
function addNumber(a) {
    if (calculatebhayo == 1) {
        display.value = a;
        calculatebhayo = 0;
    }
    else {
        display.value = display.value + a;
    }
}
function deleteall() {
    display.value = "";
}
function deletOne() {
    if (display.value == "Error") {
        display.value = "";
    }
    else {
        display.value = display.value.slice(0, -1);

    }
}
function calculatelt() {
    try {
        display.value = eval(display.value);
        calculatebhayo = 1;
    }
    catch {
        display.value = "Error";
        calculatebhayo = 1;
    }
}