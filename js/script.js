var capa = document.getElementById('b7');
var iframe = document.getElementById("iframe");
var h2 = document.createElement("h2");

function a1() {
    change("Transition-timing-function");
    iframe.setAttribute("src", "one.html");
}

function a2() {
    change("Transition-property");
    iframe.setAttribute("src", "two.html");
}

function a3() {
    change("Transition-timing-function");
    iframe.setAttribute("src", "three.html");
}

function a4() {
    change("Transition-delay");
    iframe.setAttribute("src", "four.html");
}

function a5() {
    change("Image-orientation");
    iframe.setAttribute("src", "five.html");
}

function a6() {
    change("Image Renderingn");
    iframe.setAttribute("src", "six.html");
}

function a7() {
    change("Múltiples fondos");
    iframe.setAttribute("src", "seven.html");
}

function a8() {
    change("Bacground size");
    iframe.setAttribute("src", "eight.html");
}

function a9() {
    change("Columnas");
    iframe.setAttribute("src", "nine.html");
}

function a10() {
    change("Flex");
    iframe.setAttribute("src", "ten.html");
}

function a11() {
    change("Text overflow");
    iframe.setAttribute("src", "eleven.html");
}

function a12() {
    change("Resize");
    iframe.setAttribute("src", "twelve.html");
}

function a13() {
    change("Font stretch");
    iframe.setAttribute("src", "thirteen.html");
}

function a14() {
    change("Text rendering");
    iframe.setAttribute("src", "fourteen.html");
}

function a15() {
    change("Display");
    iframe.setAttribute("src", "fifteen.html");
}

function a16() {
    change("Pseudo clases");
    iframe.setAttribute("src", "sixteen.html");
}

function a17() {
    change("Pseudo elementos");
    iframe.setAttribute("src", "seventeen.html");
}

function a18() {
    change("@font face");
    iframe.setAttribute("src", "eighteen.html");
}

function a19() {
    change("Transformaciones 2D y 3D");
    iframe.setAttribute("src", "nineteen.html");
}

function a20() {
    change("Animaciones");
    iframe.setAttribute("src", "https://www.google.com/maps/search/canl%C3%BA/@-11.9873019,-76.8366333,18z");
}

function change(t) {
    h2.innerHTML = t;
    capa.appendChild(h2);
}
