function modernTimes(input){
    let tokens = input.split(" ");
    for (let token of tokens){
        if (token[0] == "#" && checkValidity(token)){
            console.log(token.slice(1, token.length));
        }
    }

    function checkValidity(word){
        let isValid = false;
        for (let i = 1; i < word.length; i++){
            if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90 ||
            word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122){
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        return isValid;
    }
}