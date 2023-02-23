function passwordGenerator(input){
    let firstString = input[0];
    let secondString = input[1];
    let thirdString = input[2].toUpperCase();
    let workingThirdString = "";

    let concatenatedString = firstString.concat(secondString);

    let vowelsCounter = 0;
    for (let letter of concatenatedString){
        if (letter.charCodeAt(0) == 97 || letter.charCodeAt(0) == 101
        || letter.charCodeAt(0) == 105 || letter.charCodeAt(0) == 111
        || letter.charCodeAt(0) == 117) {
            vowelsCounter++;
        }
    }

    if (thirdString.length <= vowelsCounter){
        workingThirdString = thirdString.repeat(Math.floor(vowelsCounter / thirdString.length));
        for (let i = 0; i < vowelsCounter - (Math.floor(vowelsCounter / thirdString.length) * thirdString.length); i++){
            workingThirdString += thirdString[i];
        }
    } else {
        workingThirdString = thirdString;
    }

    let workingThirdStringArray = workingThirdString.split("");
    let newConcatenatedString;
    for (let i = 0; i < concatenatedString.length; i++){
        if (concatenatedString[i].charCodeAt(0) == 97 || concatenatedString[i].charCodeAt(0) == 101
        || concatenatedString[i].charCodeAt(0) == 105 || concatenatedString[i].charCodeAt(0) == 111
        || concatenatedString[i].charCodeAt(0) == 117) {
            let replacement = workingThirdStringArray.shift();
            newConcatenatedString = concatenatedString.replace(concatenatedString[i], replacement);
            concatenatedString = newConcatenatedString;
        }
    }

    let password = newConcatenatedString.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}