// Create a button with "Click Me".
// Once it's clicked, ask the user if they want to continue being asked to quit.
// If they enter 'n', stop asking.
// If they enter anything else, ask again.
var ask = document.getElementById("typer");
ask.onclick = userClick;

function userClick() {
    var userInput = "";
    while (userInput !== "n"){
        userInput = prompt("Put a string: ")
    }
}







