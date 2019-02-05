// In your javascript, when the key for down is press, make the relative position go down 10px.
// If the key for up is pressed, make the relative position go up for 10px. Do the same for left and right.
// Note: Use document.onkeydown = [FUNCTION]; when getting all keyboard strikes. Note2: [ELEMENT].style.[DIRECTION] does not return a value.
// You have to keep up with it yourself or find a different way to call it.

var position = document.getElementsByTagName("flyingCodeCrew");
position.onkeydown = changePos;

function changePos() {
    position.style.direction =
}
