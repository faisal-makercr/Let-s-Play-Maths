const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const dropBtn = document.querySelector(".dropBtn");
const navRandom = document.querySelector(".navRandom");
const diceY = document.querySelector('.diceY');
const min=0;
const max=10;
let randomNum1;
let randomNum2;
let randomNum3;

dropBtn.addEventListener("click", function() {
    navRandom.classList.toggle("show");
});

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}
myButton.addEventListener('click', randomDice);
myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}