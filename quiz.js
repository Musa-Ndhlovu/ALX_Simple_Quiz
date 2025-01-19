function checkAnswer( correctAnswer= "4") {
    // Function body
}

const correctAnswer = document.querySelector ('quiz')

let userAnswer = 4

console.log(userAnswer);


function getSelectedAnswer(correctAnswer) {
    const radio = documents.getElementByName('choice1');

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value; // Return the value of the selected option
        }
    }

}


if (correctAnswer >= 4) {
    console.log ('Correct! Well dont.');
} else if (userAnswer >= 22 , 3) {
    console.log ("That's incorrect. Try again!");
}

document.getElementById("submit-answer")

button.addEventsListner('click', function(checkAnswer) {alert ('button clicked!');});
