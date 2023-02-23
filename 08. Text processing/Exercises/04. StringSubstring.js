function stringSubstring(word, text){
    let tokens = text.split(" ");
    let isFound = false;
    for (let i = 0; i < tokens.length; i++){
        if (tokens[i].toLowerCase() === word.toLowerCase()){
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound){
        console.log(`${word} not found!`);
    }
}