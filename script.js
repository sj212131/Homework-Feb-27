var startButton = document.getElementById("startbtn");
var questionCard = document.getElementById("question-container");
var questionEL = document.getElementById("question")
var answerButtenEl = document.getElementById("answerbtn")
var timeEl = document.querySelector(".time");
var inputInt = document.getElementById("intBox")
var saveBtn = document.getElementById("saveBtn")

var userscore = 0
var secondsLeft = 30;

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
    },
    {
        question: 'Game is over!'
    }
]

//click to start
startButton.addEventListener('click', startGame);

// random question
var question1 = questions[0]
var question2 = questions[1]
var question3 = questions[2]
var question4 = questions[3]

//Game start
function startGame() {
    questionIndex = 0;
    console.log('Game start');
    startButton.classList.add('hide');
    inputInt.classList.add('hide');
    saveBtn.classList.add('hide');
    questionCard.classList.remove('hide');
    questionDisplay();
    selection();
    setTime();
}

//timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Sec left!";
      if(secondsLeft == 0 || questionIndex == 4) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        secondsLeft = 30;
        // Calls function to create and append image
        endMessage();
      }
    }, 1000);
}



function endMessage() {
    timeEl.textContent = " Game over !";
    questionEL.innerHTML = questions[4].question;
    questionCard.classList.add('hide');

    startButton.classList.remove('hide');
    inputInt.classList.remove('hide');
    saveBtn.classList.remove('hide');
    startButton.innerText = "Restart"
    secondsLeft = 30;
}
var questionIndex = 0;
var currentlyQuestion = questions[questionIndex];   

//Game display on the card
function questionDisplay() {
    console.log(questions[questionIndex].question)
    //question display
    answerA = document.getElementById("answerA")
    answerB = document.getElementById("answerB")
    answerC = document.getElementById("answerC")
    answerD = document.getElementById("answerD")

    if (questionIndex == 4) {
        endMessage();
        return
    }
    
    // Answers for different questions 
    questionEL.innerHTML = questions[questionIndex].question;
    answerA.innerText = questions[questionIndex].answers[0].text;
    answerB.innerText = questions[questionIndex].answers[1].text;
    answerC.innerText = questions[questionIndex].answers[2].text;
    answerD.innerText = questions[questionIndex].answers[3].text;
}

//next question
function nextQuestion() {
    questionIndex++;
    questionDisplay(questions[questionIndex].question);
    console.log(questionIndex)
    if (questionIndex == 4) {
        endMessage();
        return
    }
}

//corrections
function selection() {
    correction();
    var selectionBtn = document.querySelector('.answer-btns');
    console.log(selectionBtn)
    selectionBtn.addEventListener('click', nextQuestion)
}

function correction(e) {
    var selcetedBtn = e.target
    var correct = selcetedBtn.dataset.correct
    console.log(correct)
}

function correct() {
    userscore++;
    localStorage.setItem("Highest score: ", userscore)
}

function wrong() {
    secondsLeft -= 5
}

saveBtn.addEventListener('click', saveDate);

function saveDate() {
    e.preventDefault();
    localStorage.setItem("score", userscore);
}





