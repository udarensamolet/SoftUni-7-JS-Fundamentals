function replaceRepeatingChars(input){
    let output = "";
    let letter = "";

    for (let i = 0; i < input.length - 1; i++){
        if (input[i] == input[i + 1]){
            letter = input[i];
        } else {
            letter = input[i];
            output += letter;
        }
    }

    if (input[input.length - 1] != input[input.length - 2]) {
        letter = input[input.length - 1];
        output += letter;
    } else {
        output += letter;
    }
    console.log(output);
}