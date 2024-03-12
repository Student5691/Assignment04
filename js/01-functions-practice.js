import {validateNum} from './userPromptValidation.js'

function halfNumber(a) {
    const userNum = validateNum(a)
    if (userNum === null) {
        return
    }
    console.log(`Half of ${userNum} is ${(userNum/2).toFixed(2)}.`)
    alert(`Half of ${userNum} is ${(userNum/2).toFixed(2)}.`)
}

function squareNumber(a) {
    const userNum = validateNum(a)
    if (userNum === null) {
        return
    }
    console.log(`The result of squaring ${userNum} is ${(userNum**2).toFixed(2)}.`)
    alert(`The result of squaring ${userNum} is ${(userNum**2).toFixed(2)}.`)
}

function percentOf() {
    alert('This functions takes two numbers and returns the percentage that the first number is of the second number. For example: Number "a" is 10% of number "b".')
    let a = prompt('Enter number "a":')
    const userNumA = validateNum(a)
    if (userNumA === null) {
        return
    }
    let b = prompt(`Number "a" is ${userNumA}\nEnter number "b":`)
    const userNumB = validateNum(b)
    if (userNumB === null) {
        return
    }
    console.log(`${userNumA} is ${(userNumA/userNumB*100).toFixed(2)}% of ${userNumB}.`)
    alert(`${userNumA} is ${(userNumA/userNumB*100).toFixed(2)}% of ${userNumB}.`)
}

function findModulus() {
    alert('This functions takes two integers, divides the first integer by the second, and returns the remainder of the division. For example: Integer "a", the larger of the two integers, divided by integer "b", the smaller of the two integers, has a remainder of "x".')
    let a = prompt('Enter integer "a":')
    const userNumA = parseInt(validateNum(a))
    if (userNumA === null) {
        return
    }
    let b = prompt(`Integer "a" is ${userNumA}\nEnter integer "b", by which you will divide integer "a":`)
    const userNumB = parseInt(validateNum(b))
    if (userNumB === null) {
        return
    }
    console.log(`${userNumA%userNumB} is the modulus of ${userNumA} and ${userNumB}.`)
    alert(`${userNumA%userNumB} is the modulus of ${userNumA} and ${userNumB}.`)
}

while (true) {
    let menuChoice = prompt('Select an option by typing its name and pressing enter:\n\nHalve\nSquare\nPercent\nModulus\n\nType "Exit" to quit the program.')
    
    if (menuChoice === null) {
        break
    } else {
        menuChoice = menuChoice.toLowerCase()
    }
    if (menuChoice === 'exit') {
        break
    } else if (menuChoice === 'halve') {
        let a = prompt('Enter the number you would like halved:')
        halfNumber(a)
    } else if (menuChoice === 'square') {
        let a = prompt('Enter the number you would like squared:')
        squareNumber(a)
    } else if (menuChoice === 'percent') {
        percentOf()
    } else if (menuChoice === 'modulus') {
        findModulus()
    } else {
        alert('Bad entry, please enter one of the menu options or type "Exit" to quit the program.')
    }
}