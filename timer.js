var hour = 0;
var min = 0;
var sec = 0;
var centisec = 0;
var running = false

document.addEventListener('keyup', (event) => {
    if (event.key == ' ') {
        startStop()
    }
});

function startStop() {
    if (running == false) {
        running = true;
        start();
    } else {
        running = false;
        stop();
    }
}

function start() {
	started = window.setInterval(clockRunning, 10);
    running = true;
}

function stop(){
	window.clearInterval(started);
    running = false;
}

function reset(){
    stop();
    document.getElementById("stopwatch").innerHTML = "00:00:00.00"
    hour = 0;
    min = 0;
    sec = 0;
    centisec = 0;
}

function clockRunning(){
    centisec++;
    if (centisec == 100){
        sec += 1;
        centisec = 0;

        if (sec == 60){
            min += 1;
            sec = 0;

            if (min == 60){
                hour += 1;
                min = 0;
            }
        }
    }
	
	document.getElementById("stopwatch").innerHTML = (hour ? (hour > 9 ? hour : "0" + hour) : "00") 
	+ ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" 
		+ sec) + "." + (centisec ? (centisec > 9 ? centisec : "0" + centisec) : "00");
};
