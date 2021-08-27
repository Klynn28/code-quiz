var startEl = document.querySelector("#container");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#seconds");
var quizEl = document.querySelector("#questions");
var nextEl = document.querySelector("#next");
var endEl = document.querySelector("#end");
var mainEl = document.querySelector("#starting");
var timeLeft = 3;

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
    startButton.style.display = "none";
    mainEl.style.display = "block";
    startEl.style.display = "block";
    nextEl.style.display = "block";
    endEl.style.display = "none";
}

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