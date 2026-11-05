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
    return Math.floor(Math.random() * 501);
}

button.onclick = function() {
    if(won) {
        hint.innerText = `You already won!!, Click restart to play again.`;
        return;
    }
    val = Number(document.getElementById('guessValue').value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if (val>=0 && val <=500) {
        if (val ==randomValue) {
            hint.innerText = `Congratulations! You won in ${count + 1} attempts`;
            won = true;
        }
        else if ((randomValue - val) > 300) {
            hint.innerText = `Your guess is so low I cannot even see the correct no. far away!`;
        }
        else if ((val - randomValue) > 300) {
            hint.innerText = `Your guess is so high that you need to touch some grass!`;
        }
        else if ((randomValue - val) <=150 && randomValue > val) {
            hint.innerText = `You are close go high!`;
        }
        else if ((val - randomValue) <=150 && val>randomValue) {
            hint.innerText = `You are close go low!`;
        }
        else if ((randomValue - val)<=50 && randomValue > val) {
            hint.innerText = `Oh! you are so close just a little higher!.`;
        }
        else if ((val - randomValue)<50 && val > randomValue) {
            hint.innerText = `Oh! you are so close just a little lower!.`;
        }
        else if(randomValue > val) {
            hint.innerText = `Your guess is low!`;
        }
        else if(val > randomValue) {
            hint.innerText = `Your guess is high`;
        }
    }
    else {
        hint.innerText = `No hints for this value!`;
    }
}

function increaseCounter() {
    if(count <7) {
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