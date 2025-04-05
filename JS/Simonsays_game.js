let gameSeq = [];
let userSeq = [];

let btns = ['red', 'blue', 'green', 'yellow'];

let level = 0;
let started = false;
let highScore = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function (event) {
    if (started == false) {
        console.log("Game started!");
        started = true;
        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);

}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;


    //random button choosen by game
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);

    gameFlash(randbtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highScore) {
            highScore = level;
        }
        let h3 = document.querySelector('h3');
        h3.innerHTML = `High Score: ${highScore}`;
        h2.innerHTML = `Game over, Your Score was <b>${level}</b>.<br> Press any key to Start`;

        document.body.style.backgroundColor = "red";
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {

    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}