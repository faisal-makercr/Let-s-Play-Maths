console.log ("Script Working..");

const button = document.getElementById("guessBtnn");
const restart = document.getElementById("restartBtn");
const counter = document.getElementById("counter");
const hint = document.getElementById("hint");

let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue() {
    return Math.floor(Math.random() * 501);
}

button.onclick = function() {
    if(won) {
        hint.innerText = "You already won!!, Click restart to play again.";
    }
    val = Number(document.getElementById("guessValue").value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if (val>=0 && val <=100) {
        if (val ==randomValue) {
            hint.innerText = `Congratulations! You won in ${count + 1} attempts`;
            won = true;
        }
        else if ((randomValue - val) > 10) {
            hint.innerText = `Your guess is too low!`;
        }
        else if ((val - randomValue) > 10) {
            hint.innerText = `Your guess is too high!`;
        }
        else if ((randomValue - val) <=10 && randomValue > val) {
            hint.innerText = `Your guess is slightly low!`;
        }
        else if ((val - randomValue) <=10 && val>randomValue) {
            hint.innerText = `Your guess is slightly high!`;
        }
    }
    else {
        hint.innerText = `No hints for this value!`;
    }
}

function increaseCounter() {
    if(count <9) {
        count++;
        counter.innerText = count;
    }
    else {
        counter.innerText = `Guesses Finished`;
        if (!won) {
            hint.innerText = `You lost!, The answer was ${randomValue}. Click restart.`;
        }
    }
}

restart.onclick = function() {
    location.reload();
}