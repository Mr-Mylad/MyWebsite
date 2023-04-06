const ClickArea = document.getElementById("ClickArea");
const ClickDisplay = document.getElementById("Clicks");
const CpSdisplay = document.getElementById("CPS");
const TimeDisplay = document.getElementById("TimeDisplay");

var CPS = 0;
var Clicks = 0;
var Running = false;
var Done = false;
var Time = 5;

function Click() {
    if (!Done) {
        Running = true;
        Clicks += 1;
        ClickDisplay.innerHTML = `${Clicks} clicks`;
    }
}

function Timer() {
    if (Running && Time > 0) {
        Time -= 1;
        TimeDisplay.innerHTML = `${Time} seconds left`;
        setTimeout(Timer, 1000);
    } else if (Time == 0) {
        Running = false
        Done = true;
        if ((Clicks / 5) <= 5) {
            CpSdisplay.innerHTML = `${Clicks / 5} CpS, rather pathetic, might I say`;
        } else if (Clicks / 5 <= 10) {
            CpSdisplay.innerHTML = `${Clicks / 5} CpS, you really need practice`;
        } else if (Clicks / 5 <= 15) {
            CpSdisplay.innerHTML = `${Clicks / 5} CpS, That\'s pretty decent.`;
        } else {
            CpSdisplay.innerHTML = `${Clicks / 5} CpS, That's pretty good mate!`;
        }
        TimeDisplay.innerHTML = "Times up!";
    } else {
        setTimeout(Timer, 0);
    }
}
Timer();