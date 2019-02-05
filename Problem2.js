// Problem 2:
// Use the code above.
// Once the user enters 'n' to quit, print the total number of times they didn't enter 'n'.
var ask = document.getElementById("typer");
ask.onclick = userClick;

function userClick() {
    var userInput = "";
    while (userInput !== "n"){
        userInput = prompt("Put a string: ");
    }

    for(var i=0; i<=userInput.length; i++){
        if (userInput) {
            userInput += count;
        }
        else{
            console.log(userInput);
        }
    }
}


