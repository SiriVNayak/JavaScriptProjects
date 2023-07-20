document.getElementById("neon").onmouseover = function() {neonMouse()};

function neonMouse() {
    var neon = document.getElementById("neon")
    neon.classList.add("start-rotation");
}