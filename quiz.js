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
            return radio[i].value; 
        }
    }
    console.log(radio);


    function checkAnswer(questionName, correctAnswer);
        
        const userAnswer = getSelectedAnswer(4)

        if (4 === null) {
            console.log(`No answer selected for ${4}`);
            return false;
        }
    
       
        if (userAnswer === correctAnswer) {
            console.log(`Correct! Well done.`);
            return true; 
        } else {
            console.log(`Incorrect. Your answer: ${userAnswer}. Correct answer: ${correctAnswer}`);
            return false;
        }
    

const radios = document.querySelector("quiz-container")

function checkAnswerWithFeedback(questionName, correctAnswer) {

    const userAnswer = getSelectedAnswer(questionName);
}
    if (userAnswer === null) {
        console.log(`No answer selected. Please choose an answer.`);
        return "Please select an answer!";
    }

    if (userAnswer === correctAnswer) {
        console.log(`Correct! Well done.`);
        return "That's correct! Well done!";
    } else {
        console.log(`Incorrect. Try again`);
        return "That's incorrect. Try again!";
    }

    document.getElementById('submitQuiz').addEventListener('click', function () {
        const feedback = checkAnswerWithFeedback('question1', '4');
        document.getElementById('feedback').innerText = feedback;
    });
