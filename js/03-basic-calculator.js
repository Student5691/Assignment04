import {validateNum, validateStr} from './userPromptValidation.js'

function calculate(a,b,operator) {
    if (operator === '+') {
        return a + b
    } else if (operator === '-') {
        return a - b
    } else if (operator === '*') {
        return a * b
    } else if (operator === '/') {
        return a / b
    } else {
        alert('ERROR. Could not identify the operator.')
        return null
    }
}

while (true) {
    let goAgain = prompt('Would you like to perform a calculation? (y/n): ')
    const mainMenu = ['y','n']
    goAgain = validateStr(goAgain, mainMenu)

    if (goAgain === 'n' || goAgain === null) {
        break
    } else if (goAgain === 'y') {

        let mathOperator = prompt('What kind of operation would you like to perform?\nEnter the symbol of the desired operation:\n+ (addition), - (subtraction), * (multiplication), / (division)')
        const opMenu = ['+','-','*','/']
        mathOperator = validateStr(mathOperator, opMenu)
        if (mathOperator === null) {
            continue
        }

        let firstNum = prompt(` x ${mathOperator} y\nEnter the first number, "x":`)
        firstNum = validateNum(firstNum)
        if (firstNum === null) {
            continue
        }

        let secondNum = prompt(` ${firstNum} ${mathOperator} y\nEnter the second number, "y":`)
        secondNum = validateNum(secondNum)
        if (secondNum === null) {
            continue
        }

        let calcResult = calculate(firstNum,secondNum,mathOperator)
        if (calcResult === null) {
            alert('There was an error, the calculation returned "null".')
        } else {
            if (Number.isFinite(calcResult) && !Number.isInteger(calcResult)) {
                calcResult = calcResult.toFixed(2)
            }
            alert(`${firstNum} ${mathOperator} ${secondNum} = ${calcResult}`)
        }

    } else {
        alert('I\'m sorry, I did not understand you, please enter a "y" or "n".')
    }
}
alert('Bye!')