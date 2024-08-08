let userChoice = document.querySelectorAll('.box2 div');

let box0 = document.querySelectorAll('.box0 div');

let box1 = document.querySelectorAll('.box1 div');

let winLossDraw = {
    win: 0,
    loss: 0,
    draw: 0
}

function gameResult(computerChoice, userChoice) {
    switch(userChoice) {
        case 'rock':
            if (computerChoice == 3) {
                box1[0].innerText = winLossDraw.win++;
            } else if (computerChoice == 2) {
                box1[1].innerText = winLossDraw.loss++;
            } else {
                box1[2].innerText = winLossDraw.draw++;
            }
            break;
        case 'paper':
            if (computerChoice == 1) {
                box1[0].innerText = winLossDraw.win++;
            } else if (computerChoice == 3) {
                box1[1].innerText = winLossDraw.loss++;
            } else {
                box1[2].innerText = winLossDraw.draw++;
            }
            break;
        case 'scissor':
            if (computerChoice == 2) {
                box1[0].innerText = winLossDraw.win++;
            } else if (computerChoice == 1) {
                box1[1].innerText = winLossDraw.loss++;
            } else {
                box1[2].innerText = winLossDraw.draw++;
            }
            break;
    }
}

function gameChanges(computerChoice, userChoice) {
    switch(userChoice) {
        case 'rock':
            box0[0].innerText = 'You choose → ✊🏻';
            break;
        case 'paper':
            box0[0].innerText = 'You choose → 🖐🏻';
            break;
        case 'scissor':
            box0[0].innerText = 'You choose → ✌🏻';
            break;
    }

    switch(computerChoice) {
        case 1:
            box0[1].innerText = 'Computer choose → ✊🏻';
            break;
        case 2:
            box0[1].innerText = 'Computer choose → 🖐🏻';
            break;
        case 3:
            box0[1].innerText = 'Computer choose → ✌🏻';
            break;
    }
}

userChoice.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        let computerChoice = Math.floor(Math.floor(Math.random() * 3) + 1);
        let userFinalChoice = e.target.id;
        if(userFinalChoice == 'reset') {
            window.location.reload(true);
        } else {
            gameChanges(computerChoice, userFinalChoice);
            gameResult(computerChoice, userFinalChoice);
            box1[0].innerText = winLossDraw.win;
            box1[1].innerText = winLossDraw.loss;
            box1[2].innerText = winLossDraw.draw;
        }
    });
});