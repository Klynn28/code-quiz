var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#seconds");
var timeLeft = 90;


function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left in quiz.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function init () {
    setTime();
}

startButton.addEventListener("click", init);