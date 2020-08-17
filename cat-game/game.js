const age = 11;
const randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const makeRange = (age) => {
    if (age < 10) {
        return randomNum(10, 1);
    } else if (age < 20) {
        return randomNum(20, 1);
    } else {
        return randomNum(100, 1);
    }
};

let score = 0;
let wins = 0;
let losses = 0;
let val1 = 0;
let val2 = 0;
let val3 = 0;

document.addEventListener('DOMContentLoaded', () => {
    setUpDivs();
    setUpGame();
    gameNumbers();
});

function setUpGame() {
    targetNum = 0;
    playerNum = 0;
    targetNum = age * makeRange(age);
    val1 = makeRange(age);
    val2 = makeRange(age);
    val3 = makeRange(age);
    scoreDiv.innerText = score;
    winsDiv.innerText = wins;
    lossesDiv.innerText = losses;
    playerNumber.innerText = playerNum;
    targetNumber.innerText = targetNum;
    target1.innerText = val1;
    target2.innerText = val2;
    target3.innerText = val3;
}

function gameNumbers() {
    target1.addEventListener('click', () => {
        play(val1);
    });
    target2.addEventListener('click', () => {
        play(val2);
    });
    target3.addEventListener('click', () => {
        play(val3);
    });
}

function play(val) {
    playerNum = playerNum + val;
    playerNumber.innerText = playerNum;
    match(playerNum, targetNum);
}

function match(playerNum, targetNum) {
    if (playerNum > targetNum) {
        lose();
    }
    if (playerNum === targetNum) {
        win();
    }
}

function lose() {
    losses++;
    lossesDiv.innerText = losses;
    matchScores();
    setUpGame();
}

function win() {
    wins++;
    winsDiv.innerText = wins;
    matchScores();
    setUpGame();
}

function matchScores() {
    console.log('matchedScores');
    if (losses === 3) {
        score--;
        wins = 0;
        losses = 0;
        scoreDiv.innerText = score;
        winsDiv.innerText = wins;
        lossesDiv.innerText = losses;
    } else if (wins === 3) {
        score++;
        wins = 0;
        losses = 0;
        scoreDiv.innerText = score;
        winsDiv.innerText = wins;
        lossesDiv.innerText = losses;
    }
}

function setUpDivs(){
    const scoreWrapper = document.createElement("div");
    scoreWrapper.setAttribute("id", "scoreWrapper");
    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("id", "scoreDiv");
    scoreWrapper.appendChild(scoreDiv);
    const winsDiv = document.createElement("div");
    winsDiv.setAttribute("id", "winsDiv");
    scoreWrapper.appendChild(winsDiv);
    const lossesDiv = document.createElement("div");
    lossesDiv.setAttribute("id", "lossesDiv");
    scoreWrapper.appendChild(lossesDiv);
    
    const targetWrapper = document.createElement("div");
    targetWrapper.setAttribute("id", "targetWrapper");
    const targetNumber = document.createElement("div");
    targetNumber.setAttribute("id", "targetNumber");
    targetWrapper.appendChild(targetNumber);
    const playerNumber = document.createElement("div");
    playerNumber.setAttribute("id", "playerNumber");
    targetWrapper.appendChild(playerNumber);
    
    const numberWrapper = document.createElement("div");
    numberWrapper.setAttribute("id", "numberWrapper");
    const target1 = document.createElement("button");
    target1.setAttribute("id", "target1");
    numberWrapper.appendChild(target1);
    const target2 = document.createElement("button");
    target2.setAttribute("id", "target2");
    numberWrapper.appendChild(target2);
    const target3 = document.createElement("button");
    target3.setAttribute("id", "target3");
    numberWrapper.appendChild(target3);
    
    const gameDiv = document.getElementById("gameDiv");
    gameDiv.appendChild(scoreWrapper);
    gameDiv.appendChild(targetWrapper);
    gameDiv.appendChild(numberWrapper);
}