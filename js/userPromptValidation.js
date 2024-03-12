export function validateNum(x) {
    console.log("1. ", x)
    while (x === null || !/^(\d+(\.\d+)?|\.\d+)$/.test(x)) {
        if (x === null) {
            return null
        }
        x = prompt('Bad input, please enter a valid number in numerical form:');
        console.log("2. ", x)
    }
    const goodInput = Number(x);
    console.log("3. ", goodInput)
    return goodInput;
}

export function validateStr(x,y) {
    const arrayAsString = y.join(', ')
    while (x === null || !y.includes(x.toLowerCase())) {
        if (x === null) {
            return null
        }
        x = prompt(`Bad input, please enter a valid option from the list:\n${arrayAsString}`);
    }
    x = x.toLowerCase()
    return x;
}