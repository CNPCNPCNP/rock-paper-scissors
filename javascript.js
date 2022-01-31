function computerPlay() {
    let randomInt = Math.random() * 3
    if (randomInt < 1) {
        return 'paper'
    }
    else if (randomInt < 2) {
        return 'scissors'
    }
    else {
        return 'rock'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    switch(playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    return 'Draw'
                case 'paper':
                    return 'Loser! Loser!! haha'
                case 'scissors':
                    return 'Winner is you!'
            }
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                    return 'Winner is you!'
                case 'paper':
                    return 'Draw'
                case 'scissors':
                    return 'Loser! Loser!! haha'
            }
        case 'scissors':
            switch(computerSelection) {
                case 'rock':
                    return 'Loser! Loser!! haha'
                case 'paper':
                    return 'Winner is you!'
                case 'scissors':
                    return 'Draw'
            }
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log(playRound('rock', computerPlay()))
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log(playRound('paper', computerPlay()))
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log(playRound('paper', computerPlay()))
})


// game()