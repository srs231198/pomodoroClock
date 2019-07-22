//buttons
var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");

//start button for the timer
startBtn.addEventListener("click", function() {
    var minuteCounter = 0;
    var minutes = Number(document.querySelector("#minutes").innerHTML);
    var seconds = Number(document.querySelector("#seconds").innerHTML);

    if(minutes === 25 && seconds === 0){
        minutes--;
        document.querySelector("#minutes").innerHTML = minutes.toString();
        seconds = 59;
        document.querySelector("#seconds").innerHTML = seconds.toString();
    }

    //countdown minutes
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

        minuteCounter++;
        if(minuteCounter === 25) {
            clearInterval(minute_time);
        }

    }, 60000);

    //countdown seconds
    var second_time = setInterval(function(){
            if(seconds <= 0){
                seconds = 59;
                document.querySelector("#seconds").innerHTML = seconds.toString();
            }
            else if(seconds <= 10){
                seconds--;
                document.querySelector("#seconds").innerHTML = "0" + seconds.toString();  
            }
            else{
                seconds--;
                document.querySelector("#seconds").innerHTML = seconds.toString();
            }   
    }, 1000);

    stopBtn.onclick = function() {
        clearInterval(minute_time); 
        clearInterval(second_time);
    };

    resetBtn.onclick = function() {
        clearInterval(minute_time); 
        clearInterval(second_time);
        document.querySelector("#minutes").innerHTML = "25";
        document.querySelector("#seconds").innerHTML = "00";
    }
});



