import {validateStr} from './userPromptValidation.js'

function rockPaperScissors() {
    let goAgain = 'y'
    let wins=0, ties=0, losses=0
    const menu = ['r','p','s','exit']
    do {
        let menuChoice = prompt(`Welcome to the Rock-Paper-Scissors Game!\n\nStats are:\n${wins} win(s)\n${ties} tie(s)\n${losses} loss(es)\n\nEnter "R" for rock, "P" for paper, "S" for scissors, or "exit" to quit the program:`)

        // if (menuChoice === null) {
        //     goAgain = 'n'
        //     alert(`Thank you for playing!\nFinal Score:\n${wins} win(s)\n${ties} tie(s)\n${losses} loss(es)`)
        //     continue
        // }

        let userChoice = validateStr(menuChoice, menu)
        console.log(userChoice)
        if (userChoice === null) {
            goAgain = 'n'
            break
        }

        if (userChoice === 'exit') {
            goAgain = 'n'
            alert(`Thank you for playing!\nFinal Score:\n${wins} win(s)\n${ties} tie(s)\n${losses} loss(es)`)
            continue
        }
        let botChoice = Math.floor(Math.random()*3) // 0 = rock, 1 = paper, 2 = scissors
        if (botChoice === 0 && userChoice === 'r') {
            alert('You both chose ROCK! It\'s a tie!')
            ties++
        } else if (botChoice === 0 && userChoice === 'p') {
            alert('The bot choose ROCK, you chose PAPER: You win!')
            wins++
        } else if (botChoice === 0 && userChoice === 's') {
            alert('The bot choose ROCK, you chose SCISSORS: You lose!')
            losses++
        } else if (botChoice === 1 && userChoice === 'r') {
            alert('The bot choose PAPER, you chose ROCK: You lose!')
            losses++
        } else if (botChoice === 1 && userChoice === 'p') {
            alert('You both chose PAPER! It\'s a tie!')
            ties++
        } else if (botChoice === 1 && userChoice === 's') {
            alert('The bot choose PAPER, you chose SCISSORS: You win!')
            wins++
        } else if (botChoice === 2 && userChoice === 'r') {
            alert('The bot choose SCISSORS, you chose ROCK: You win!')
            wins++
        } else if (botChoice === 2 && userChoice === 'p') {
            alert('The bot choose SCISSORS, you chose PAPER: You lose!')
            losses++
        } else if (botChoice === 2 && userChoice === 's') {
            alert('You both chose SCISSORS! It\'s a tie!')
            ties++
        } else {
            alert('Bad entry, please enter only an "r", a "p", an "s", or "exit".')
            continue
        }
        
    } while (goAgain === 'y')
}

while (true) {
    let playGame = prompt('Do you want to play rock-paper-scissors? (y/n):')
    const menu = ['y','n']
    playGame = validateStr(playGame, menu)
    if (playGame === 'y') {
        rockPaperScissors()
        continue
    } else if (playGame === 'n' || playGame === null) {
        alert('Nevermind then... :(')
        break
    } else {
        alert("I'm sorry, I didn't undersrtand that.")
    }
}