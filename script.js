const block = document.getElementById("mole");
const timer = document.getElementById("time");
const score1 = document.getElementById("score");
let time = 500;
let score = 0;
let press = 0;

function resize() {
    let size = 25 + Math.random() * 100;
    block.style.transform = `scale(${size}%, ${size}%`;
}

function relocate() {
    let x = 5 + Math.random() * 90;
    let y = 15 + Math.random() * 45;
    block.style.left = x + "%";
    block.style.top = y + "%";
    score++;
    score1.innerText = "Score: " + score;
}

function timerfunc() {
    time--;
    timer.innerText = time;
    if (time == 0) {
        timer.innerText = "Game Over";
        time = 0;
    } else if (time < 0) {
        timer.innerText = "Game Over";
        time = 0;
    }
}

setInterval(timerfunc, 0.1);

function reset() {
    press++;
    time = 500 - (press * 5);
}

block.addEventListener("click", resize);
block.addEventListener("click", relocate);
block.addEventListener("click", reset);