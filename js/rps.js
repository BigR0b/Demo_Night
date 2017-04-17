var userChoice = prompt("Do you choose Rock, Paper or S cissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
    alert("The result is a tie!");
}
else if (choice1 === "rock") {
    if (choice2 ==="scissors")  {
         alert("Rock Wins");
    }
    else {
        alert("Paper Wins");
    }
}
else if (choice1 === "paper") {
    if (choice2 === "rock") {
        alert("Paper Wins");
    }
    else {
        alert("Scissors Wins");
    }
}
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors Wins");
    }
    else {
        alert( "Rock Wins");
    }
}
};
compare(userChoice, computerChoice);
