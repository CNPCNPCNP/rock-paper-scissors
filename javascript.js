function computerPlay() {
    let randomInt = Math.random() * 3
    if (randomInt < 1) {
        return 'Paper'
    }
    else if (randomInt < 2) {
        return 'Scissors'
    }
    else {
        return 'Rock'
    }
}

console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())