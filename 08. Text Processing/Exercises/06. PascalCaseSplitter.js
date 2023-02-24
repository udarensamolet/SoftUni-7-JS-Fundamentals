function pascalCaseSplitter(input){
    let words = [];
    for (let i = 0; i < input.length; i++){
        if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90){
            let startPosition = i;
            let endPosition;
            for (let j = i + 1; j < input.length; j++){
                if (input[j].charCodeAt(0) >= 65 && input[j].charCodeAt(0) <= 90){
                    endPosition = j;
                    break;
                }
            }
            let word = input.slice(startPosition, endPosition);
            words.push(word);
            i = endPosition - 1;
        }
    }
    console.log(words.join(", "));
}