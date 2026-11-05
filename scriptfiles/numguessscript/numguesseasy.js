console.log("Script Working..");

const button = document.getElementById("guessBtn");
const restart = document.getElementById("restartBtn");
const counter = document.getElementById("counter");
const hint = document.getElementById("hint");

let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue(){
    return Math.floor(Math.random() * 51);
}

button.onclick = function() {
    if (won) {
        hint.innerText = "You already won! Click Restart to play again.";
        return;
    }
    val = Number(document.getElementById('guessValue').value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if(val >= 0 && val <= 50){
        if(val == randomValue) {
            hint.innerText =`Congratulations, You won in ${count + 1} attempts`;
            won = true;
        }
        else if ((randomValue - val) > 10) {
            hint.innerText = "Your guess is too low!";
        }
        else if ((val - randomValue) > 10) {
            hint.innerText = "Your guess is too high!";
        }
        else if ((randomValue -val) <=10 && randomValue > val) {
            hint.innerText = "Your guess is slightly low!";
        }
        else if ((val - randomValue) <=10 && val > randomValue) {
            hint.innerText = "Your guess is slightly high!";
        }
    }
    else {
        hint.innerText = "No hints for this value";
    }
}
function increaseCounter() {
    if (count < 3) {
        count++;
        counter.innerText = count;
    }
    else {
        counter.innerText = "Guesses Finished";
        if (!won) {
            hint.innerText = `You lost, the ans was ${randomValue}. Click Restart.`;
        }
    }
}
restart.onclick = function() {
    location.reload();
}