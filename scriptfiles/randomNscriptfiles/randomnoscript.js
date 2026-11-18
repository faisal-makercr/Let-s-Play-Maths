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

myButton.onclick = function() {
    label1.textContent = "";
    label2.textContent = "";
    label3.textContent = "";

    diceY.style.animation = "none";
    void diceY.offsetWidth;
    diceY.style.animation = "rolling 4s";

    setTimeout(() => {
    randomNum1 = Math.floor(Math.random() * (max-min+1)) + min;
    randomNum2 = Math.floor(Math.random() * (max-min +1)) + min;
    randomNum3 = Math.floor(Math.random() * (max-min+1)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

    diceY.style.animation = "none";
    }, 4000);
};
