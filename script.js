var startButton = document.getElementById("startbtn");
var questionCard = document.getElementById("question-container");
var questionEL = document.getElementById("question")
var answerButtenEl = document.getElementById("answerbtn")
var timeEl = document.querySelector(".time");
var inputInt = document.getElementById("intBox")
var saveBtn = document.getElementById("saveBtn")
var startTag = document.getElementById("tagStart")
var highScore = document.getElementById("highScore")


var userscore = parseInt(document.getElementById('highScore').textContent)
var secondsLeft = 30;
var questionIndex = 0;

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
startButton.addEventListener('click', startGame); {
    if (startButton.innerText === "Restart") {
        location.reload();
    }
}

// random question
var question1 = questions[0]
var question2 = questions[1]
var question3 = questions[2]
var question4 = questions[3]

//Game start
function startGame(e) {
    e.preventDefault
    console.log("startGame")
    questionIndex = 0;
    console.log('Game start');
    saveBtn.classList.add('hide');
    startTag.classList.add('hide');
    inputInt.classList.add('hide');
    startButton.classList.add('hide');
    questionCard.classList.remove('hide');
    questionDisplay();
    selection();
    setTime();
    console.log(questionIndex)

    if (startButton.innerText === "Restart") {
        location.reload();
    }
}  

//timer
function setTime() {
    console.log("setTime")
    var secondsLeft = 30;
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
    console.log("endMessage")
    timeEl.textContent = " Game over !";
    questionEL.innerHTML = questions[4].question;
    questionCard.classList.add('hide');
    startButton.classList.remove('hide');
    inputInt.classList.remove('hide');
    saveBtn.classList.remove('hide');
    startButton.innerText = "Restart"
    secondsLeft = 30;
}



// var currentlyQuestion = questions[questionIndex];   


//Game display on the card
function questionDisplay() {
    console.log("questionDisplay")
    console.log(questions[questionIndex].question)
    //question display
    answerA = document.getElementById("answerA")
    answerB = document.getElementById("answerB")
    answerC = document.getElementById("answerC")
    answerD = document.getElementById("answerD")


    console.log("question Display: " + questions[questionIndex].answers[0].correct);

    // Answers for different questions 
    questionEL.innerText = questions[questionIndex].question;
    answerA.innerText = questions[questionIndex].answers[0].text;
    answerB.innerText = questions[questionIndex].answers[1].text;
    answerC.innerText = questions[questionIndex].answers[2].text;
    answerD.innerText = questions[questionIndex].answers[3].text;
    answerA.setAttribute("data-correct", questions[questionIndex].answers[0].correct)
    answerB.setAttribute("data-correct", questions[questionIndex].answers[1].correct)
    answerC.setAttribute("data-correct", questions[questionIndex].answers[2].correct)
    answerD.setAttribute("data-correct", questions[questionIndex].answers[3].correct)
    
}


//next question
function nextQuestion() {
    console.log("nextQuestion")
    questionIndex += 1;
    questionDisplay(questions[questionIndex].question);
    console.log("Q index: " + questionIndex)
    if (questionIndex >= 4) {
        endMessage();
        return;
    }
}

//selection
function selection() {
    // correction();
    console.log("selection")
    var selectionBtn = document.querySelector('.answer-btns');
    console.log(selectionBtn);
    selectionBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("event target: ", event.target);
        console.log("event target: ", event.target.dataset.correct);
        var isCorrect = event.target.dataset.correct
        console.log(isCorrect);
        console.log(isCorrect, typeof isCorrect);
        if (isCorrect === "true") {
            correct();
            console.log('corrected running');
            console.log('Q index ' + questionIndex);
        } if (isCorrect === "false") {
            wrong();
            console.log('wrong running');
            console.log('Q index' + questionIndex);
        }
    });
}

function correct() {
    console.log("correct")
    userscore += 1;
    nextQuestion();
    console.log('userscore is ' + userscore);
    console.log('Added point');
}

function wrong() {
    console.log("wrong")
    secondsLeft -= 5;
    console.log('5 sec lost');
    console.log('userscore is ' + userscore);
    nextQuestion();
}

saveBtn.addEventListener('click', function(event){
    console.log("saveDate");
    event.preventDefault();

    var userInt = document.querySelector('#intBox').value;
    localStorage.setItem ('initials ', userInt);
    localStorage.setItem ('score ', userscore);
    highScore.textContent = userscore;
});