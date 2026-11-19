const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const increaseby5Btn = document.getElementById("increaseby5Btn");
const decreaseby5Btn = document.getElementById("decreaseby5Btn");
const increaseby10Btn = document.getElementById("increaseby10Btn");
const decreaseby10Btn = document.getElementById("decreaseby10Btn");
const counterLabel = document.getElementById("counterLabel");
const stepInput = document.getElementById("stepInput");
const dropBtn = document.querySelector(".dropBtn");
const navCount = document.querySelector(".navCount");
let count =0;

dropBtn.addEventListener("click", function() {
    navCount.classList.toggle("show");
});

function getStep() {
    const value = Number(stepInput.value);
    if(isNaN(value) || value<=0) {
        return 1;
    }
    return value;
}
resetBtn.onclick = function() {
    const permission = confirm("Are you sure you want to reset?");
    if(permission) {
        count = 0;
        counterLabel.textContent = count;
    }
};
increaseBtn.onclick = function() {
    count += getStep();
    counterLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count -=getStep();
    counterLabel.textContent = count;
}
increaseby5Btn.onclick = function() {
    count +=5;
    counterLabel.textContent = count;
}
decreaseby5Btn.onclick = function() {
    count -=5;
    counterLabel.textContent = count;
}
increaseby10Btn.onclick = function() {
    count +=10;
    counterLabel.textContent = count;
}
decreaseby10Btn.onclick = function() {
    count -=10;
    counterLabel.textContent = count;
}
