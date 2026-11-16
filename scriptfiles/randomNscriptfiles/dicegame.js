const diceY = document.querySelector('.diceY');
const myButton = document.getElementById('myButton');

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {
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
}

myButton.addEventListener('click', randomDice);