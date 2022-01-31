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
                    return 0
                case 'paper':
                    return -1
                case 'scissors':
                    return 1
            }
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                    return 1
                case 'paper':
                    return 0
                case 'scissors':
                    return -1
            }
        case 'scissors':
            switch(computerSelection) {
                case 'rock':
                    return -1
                case 'paper':
                    return 1
                case 'scissors':
                    return 0
            }
    }
}

let wins = 0
let losses = 0
let draws = 0

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let result = playRound('rock', computerPlay())
    if (result == 0) {
        draws += 1
    } else if (result < 0) {
        losses += 1
    } else {
        wins += 1
    }
    updateResults()
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let result = playRound('paper', computerPlay())
    if (result == 0) {
        draws += 1
    } else if (result < 0) {
        losses += 1
    } else {
        wins += 1
    }
    updateResults()
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let result = playRound('scissors', computerPlay())
    if (result == 0) {
        draws += 1
    } else if (result < 0) {
        losses += 1
    } else {
        wins += 1
    }
    updateResults()
})

const results = document.querySelector('#results');
const linebreak = document.createElement("br");

function updateResults() {
    if (wins === 5) {
        alert('You Win!')
        wins = 0
        losses = 0
        draws = 0
    } else if (losses === 5) {
        alert('You are a loser!')
        wins = 0
        losses = 0
        draws = 0
    }
    results.innerHTML = `Your wins: ${wins}<br></br>Your losses: ${losses}<br></br>Draws: ${draws}`
}

updateResults()