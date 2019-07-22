//buttons
var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");

//start button for the timer
startBtn.addEventListener("click", function() {
    var minuteCounter = 0;
    var secondCounter = 0;
    var minutes = Number(document.querySelector("#minutes").innerHTML);
    var seconds = Number(document.querySelector("#seconds").innerHTML);

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

        //countdown seconds
        var second_time = setInterval(function(){

            

            secondCounter++
            if(secondCounter === 59){
                clearInterval(second_time);
            }
        }, 1000);

        minuteCounter++;
        if(minuteCounter === 25) {
            clearInterval(minute_time);
        }

    }, 60000);

    stopBtn.onclick = function() {clearInterval(minute_time);};
});

// stopBtn.addEventListener("click", function() {
// });

