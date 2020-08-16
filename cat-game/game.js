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

const scoreDiv = document.getElementById("scoreDiv");
const winsDiv = document.getElementById("winsDiv");
const lossesDiv = document.getElementById("lossesDiv");
const targetNumber = document.getElementById("targetNum");
const playerNumber = document.getElementById("playerNum");
const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");

let score = 0;
let wins = 0;
let losses = 0;
let val1 = 0;
let val2 = 0;
let val3 = 0;

document.addEventListener('DOMContentLoaded', () => {
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