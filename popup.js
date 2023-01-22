const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 35,
    longBreakInterval: 4,
  };

document.getElementById("default").onclick = function(){
    startTimer(pomodoro,0);
}
document.getElementById("short").onclick = function(){
    startTimer(shortBreak,0);
}

document.getElementById("long").onclick = function(){
    startTimer(longBreak,0);
}

function startTimer(min, sec){
    var min;
    var sec;
    const time = new String(min + ":" + sec);
    document.getElementById("timer").innerHTML = time;
}

// three modes
const btns = document.querySelector('');
btns.addEventListener('click', handleBtns);
function handleBtns(event){

}
