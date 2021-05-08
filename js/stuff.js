document.getElementById("vid-button").onclick = function() { ToggleVid() };


function ToggleVid() {
    current_value = document.getElementById("big-vid").style.visibility;
    new_value = "hidden";
    if (current_value == "hidden") {
        new_value = "visible";
    }
    document.getElementById("big-vid").style.visibility = new_value;
}