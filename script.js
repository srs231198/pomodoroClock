//buttons
var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");

//start button for the timer
startBtn.addEventListener("click", function() {
    var counter = 0;
    var minutes = 25;
    var seconds = 59;

    var minute_time = setInterval(function() {
        if(minutes < 0){
            return;
        }
        else if(minutes <= 10){
            minutes--;
            document.querySelector("#minutes").innerHTML = "0" + minutes.toString();
        }
        else{
            minutes--;
            document.querySelector("#minutes").innerHTML = minutes.toString();
        }

        counter++;
        if(counter === 25) {
            clearInterval(minute_time);
        }

    }, 1000);
});

stopBtn.addEventListener("click", function() {
});

