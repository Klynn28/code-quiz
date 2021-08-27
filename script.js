var startEl = document.querySelector("#starting")
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#seconds");
var quizEl = document.querySelector("#questions")
var nextEl = document.querySelector("#next")
var timeLeft = 90;

startEl.style.display = "none";
nextEl.style.display = "none";

var timer = function () {
    var interval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left in quiz.";
        if(timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(interval);
        }
    }, 1000);
}

var quiz = function () {
    startButton.style.display = "none";
    startEl.style.display = "block";
    nextEl.style.display = "block";
    
}

startButton.addEventListener("click", function () {
    timer();
    quiz();
});