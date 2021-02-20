var startButton = document.getElementById("startbtn");
var questionCard = document.getElementById("question-container");
var questionEL = document.getElementById("question")
var answerButtenEl = document.getElementById("answerbtn")


var userscore = 0

//question bank
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: "Strings", correct: false },
            { text: "Boolean", correct: false },
            { text: "Alert", correct: true},
            { text: "Number", correct: false },
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: "<scripting>", correct: false },
            { text: "<js>", correct: false },
            { text: "<java>", correct: false},
            { text: "<script>", correct: true },
        ] 
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: "<script src='xxxx.js'>", correct: true },
            { text: "<script name='xxxx.js'>", correct: false },
            { text: "<script id='xxxx.js'>", correct: false},
            { text: "<script href='xxxx.js'>", correct: false },
        ] 
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: "msg('Hello World!')", correct: false },
            { text: "alert('Hello World!')", correct: true },
            { text: "msgBox('Hello World!')", correct: false},
            { text: "prompt('Hello World!')", correct: false },
        ] 
    }
]

//click to start
startButton.addEventListener('click', startGame);

//test of question log
console.log(questions[0].question)
console.log(questions[1].question)
console.log(questions[2].question)
console.log(questions[3].question)
//test of answer log
console.log(questions[0].answers)
console.log(questions[0].answers[0])
console.log(questions[0].answers[0].text)
console.log(questions[0].answers.length)
console.log(questions[1].answers)
console.log(questions[2].answers)
console.log(questions[3].answers)
console.log(questions[Math.floor(Math.random() * questions.length)].question)

// random question
var question1 = questions[0].question
var question2 = questions[1].question
var question3 = questions[2].question
var question4 = questions[3].question

var randomQuestion = questions[Math.floor(Math.random() * questions.length)].question

//Game start
function startGame() {
    console.log('Game start');
    startButton.classList.add('hide');
    questionCard.classList.remove('hide');
    questionDisplay();
}

//Game display on the card
function questionDisplay() {
    //question display
    questionEL.innerHTML = randomQuestion;

    //answer display
    if (question1) {
        answersLength = questions[0].answers.length
        answerA = document.getElementById("answerA")
        answerB = document.getElementById("answerB")
        answerC = document.getElementById("answerC")
        answerD = document.getElementById("answerD")

        answerA.innerText = questions[0].answers[0].text;
        answerB.innerText = questions[0].answers[1].text;
        answerC.innerText = questions[0].answers[2].text;
        answerD.innerText = questions[0].answers[3].text;


        // for (var i = 0; i < answersLength; i++) {
        //     answerA.innerText = questions[0].answers[i];
        // }
    }

}



function selectAnswer(){}
