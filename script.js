var startEl = document.querySelector("#container");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#seconds");
var quizEl = document.querySelector("#questions");
var nextEl = document.querySelector("#next");
var endEl = document.querySelector("#end");
var mainEl = document.querySelector("#starting");
var questionEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var correctAns = document.querySelector("#correct")

var timeLeft = 60;
var nextQuestion = 0;

startEl.style.display = "none";
nextEl.style.display = "none";
endEl.style.display = "none";
mainEl.style.display = "none";


var timer = function () {
    var interval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left in quiz.";
        if(timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(interval);
            end();
        }
    }, 1000);
}

var quiz = function () {
    startEl.style.display = "block";
    nextEl.style.display = "block";
    endEl.style.display = "none";
    mainEl.style.display = "block";
    startButton.style.display = "none";

    var questions = [
        {
            question: "What does HTML stand for?",
            answers: ["hyper markup language", "text language", "hypertext markup language", "markup language"],
            correct: "hypertext markup language"
        },
        {
            question: "What does HTML stand for?",
            answers: ["hyper markup language", "text language", "hypertext markup language", "markup language"],
            correct: "hypertext markup language"
        },
        {
            question: "What does HTML stand for?",
            answers: ["hyper markup language", "text language", "hypertext markup language", "markup language"],
            correct: "hypertext markup language"
        },
        {
            question: "What does HTML stand for?",
            answers: ["hyper markup language", "text language", "hypertext markup language", "markup language"],
            correct: "hypertext markup language"
        }
    ];
    
    questionEl.textContent = questions[0].question;
    
    for (var i=0; i < questions.length; i++) {
    var btnEl = document.createElement("button");
    btnEl.textContent = (questions[0].answers[i]);
    answersEl.appendChild(btnEl);
    }

};

var end = function () {
    startButton.style.display = "none";
    startEl.style.display = "none";
    nextEl.style.display = "none";
    mainEl.style.display = "block";
    endEl.style.display = "block";
}

startButton.addEventListener("click", function () {
    timer();
    quiz();


});

