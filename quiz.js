function checkAnswer( correctAnswer= "4") {
    // Function body
}

const correctAnswer = document.querySelector ('quiz')

let userAnswer = "4"
console.log(4);


function getSelectedAnswer(correctAnswer) {
    const radio = documents.getElementByName('choice1');
}

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value; // Return the value of the selected option
        }
    }
    console.log(radio);


    function checkAnswer(questionName, correctAnswer);
        // Retrieve the user's selected answer
        const userAnswer = getSelectedAnswer(4)

        if (4 === null) {
            console.log(`No answer selected for ${4}`);
            return false; // Return false if no answer is selected
        }
    
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            console.log(`Correct! Well done.`);
            return true; // Return true if the answer is correct
        } else {
            console.log(`Incorrect. Your answer: ${userAnswer}. Correct answer: ${correctAnswer}`);
            return false; // Return false if the answer is incorrect
        }
    

const radios = document.querySelector("quiz-container")
document.getElementById("submit-answer")

button.addEventsListner('click', function(checkAnswer) {alert ('button clicked!');});
