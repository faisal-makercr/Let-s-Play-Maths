console.log("Script Working..");

const button = document.getElementById("guessBtn");
const restart = document.getElementById("restartBtn");
const counter = document.getElementById("counter");
const hint = document.getElementById("hint");

let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue() {
    return Math.floor(Math.random() * 1001);
}
button.onclick = function() {
    if(won) {
        hint.innerText = "You Already won!, Click restart to play again,";
    }
    val = Number(document.getElementById("guessValue").value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if (val>=0 && val<=1000) {
        if (val === randomValue) {
            hint.innerText = `Congratulations! You won in ${count+1} attempts.`;
            won = true;
        }
        else if ((randomValue - val)> 500) {
            hint.innerText= `we are not here to count, You need to go far bro Hurry! up.`;
        }
        else if ((val - randomValue)> 500) {
            hint.innerText = `Too far you are too far calm down bro what's the hurry for?`;
        }
        else if((randomValue - val)> 300) {
            hint.innerText= `Your guess is too low!`;
        }
        else if((val - randomValue)> 300) {
            hint.innerText=`Your guess is too high!`;
        }
        else if((randomValue - val)<=200 && randomValue>val) {
            hint.innerText = `You are close go high!`;
        }
        else if((val - randomValue)<=200 && val>randomValue){
            hint.innerText = `You are close go low!`;
        }
        else if ((randomValue - val)<=100 && randomValue>val) {
            hint.innerText = `Your guess is slightly low! go just a little high`;
        }
        else if ((val - randomValue)<=100 && val>randomValue) {
            hint.innerText = `Your guess is slightly high! go just a little low`;
        }
    }
    else {
        hint.innerText = `No hints for this value!`;
    }
}

function increaseCounter() {
    if(count < 7) {
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