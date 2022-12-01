const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const lapsBtn = document.getElementById("laps");
const clearBtn = document.getElementById("clear");
const minute = document.querySelector(".minute");
const second = document.querySelector(".sec");
const centiSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");
const bg = document.querySelector(".outer-circle");


let isStart = false;
let isReset = false;
let minCounter = 0;
let min;
let secCounter = 0;
let sec;
let centiCounter = 0;
let centiSec;
let lapItem = 0;




const toggleBtn = () => {
    lapsBtn.classList.remove("hide");
    resetBtn.classList.remove("hide");
}

const start = () => {
    if (!isStart && !isReset) {
        startBtn.innerHTML = "Stop";
        bg.classList.add("animation-bg")
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :`;
        }, 60*1000)
        sec = setInterval(() => {
            if (secCounter === 60){
                secCounter = 0;
            }
            second.innerHTML = `&nbsp; ${++secCounter} :`;
        }, 1000)
        centiSec = setInterval(() => {
            if (centiCounter === 100){
                centiCounter = 0;
            }
            centiSecond.innerHTML = `&nbsp; ${++centiCounter}`;
        }, 10)
        isStart = true;
        isReset = true;
    } else{
        startBtn.innerHTML = "Start";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isStart = false;
        isReset = false;
        bg.classList.remove("animation-bg")
    }
    toggleBtn();
}
 
const reset = () => {
    isReset = true;
    start();
    lapsBtn.classList.add("hide");
    resetBtn.classList.add("hide");
    minCounter = 0;
    secCounter = 0;
    centiCounter = 0;
    minute.innerHTML = "0 :";
    second.innerHTML = "&nbsp; 0 :";
    centiSecond.innerHTML = "&nbsp; 0";

}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");
    
    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp")

    number.innerHTML = `#${++lapItem}`
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearBtn.classList.remove("hide");
}

const clearAll = () => {
    laps.innerHTML = "";
    clearBtn.classList.add("hide");
}


startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
lapsBtn.addEventListener("click", lap);
clearBtn.addEventListener("click", clearAll)