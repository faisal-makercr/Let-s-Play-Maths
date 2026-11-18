const diceY = document.querySelector('.diceY');
const myButton = document.getElementById('myButton');
const dropBtn = document.querySelector('.dropBtn');
const navRandom = document.querySelector('.navRandom');

dropBtn.addEventListener("click", function() {
    navRandom.classList.toggle("show");
});

const randomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(random);
};

const rollDice = random => {
    diceY.style.animation = "none";
    void diceY.offsetWidth;
    diceY.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random) {
            case 1:
                diceY.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
            case 2:
                diceY.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 3:
                diceY.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 4:
                diceY.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 5:
                diceY.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 6:
                diceY.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
        diceY.style.animation = 'none';
    }, 4050);
};

myButton.addEventListener('click', randomDice);