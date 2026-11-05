console.log("Script Working..");

const button = document.getElementById("guessBtn");
const restart = document.getElementById("restartBtn");
const counter = document.getElementById("counter");
const hint = document.getElementById("hint");

let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function.onclick = function() {
    if(won) {
        hint.innerText = "You Already won!, Click restart to play again,";
    }
    val = Number(document.getElementById("guessValue").value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if(val>=0 && val<=1000) {
        if(val== randomValue) {
            hint.innerText = `Congratulations! You won in ${count+1} attempts.`;
            won = true;
        }
        else if((randomValue - val)> 10) {
            hint.innerText= `Your guess is too low!`;
        }
        else if((val - randomValue)> 10) {
            hint.innerText=`Your guess is too high!`;
        }
        else if((randomValue - val)<=10 && randomValue>val) {
            hint.innerText = `Your guess is slightly low!`;
        }
        else if((val - randomValue)<=10 && val>randomValue){
            hint.innerText = `Your guess is slightly high!`;
        }
    }
    else {
        hint.innerText = `No hints for this value!`;
    }
}

function increaseCounter() {
    if(count < 4) {
        count++;
        counter.innerText = count;
    }
    else {
        counter.innerText = `Guesses Finished`;
        if(!won) {
            hint.innerText =`You lost! the answer was ${randomValue}. Click Restart`;
        }
    }
}

restart.onclick=function() {
    location.reload();
}