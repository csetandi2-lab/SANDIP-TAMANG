let display = document.getElementById("display");
let main = document.getElementById("main");
function changeColor() {
    console.log('adsfsaa')
    if (main.classList.contains("white")) {
        main.classList.remove("white");
        main.classList.add("black");
        console.log('adsfsaa')
    }
    else {
        main.classList.remove("black");
        main.classList.add("white")

    }
}
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