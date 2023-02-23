function postOffice(token){
    let input = token.toString().split("|");
    let lettersLength = new Map();

    let firstPart = input[0];
    let patternFirstPart = /(\$[A-Z]+\$)|(\#[A-Z]+\#)|(\*[A-Z]+\*)|(\%[A-Z]+\%)|(\&[A-Z]+\&)/g;
    let matchesFirstPart = firstPart.match(patternFirstPart).toString();
    let lettersCapital = "";
    for (let i = 1; i < matchesFirstPart.length - 1; i++){
        lettersCapital += matchesFirstPart[i];
    }

    let secondPart = input[1];
    let patternSecondPart = /[0-9][0-9]:[0-9][0-9]/g;
    let matchesSecondPart = secondPart.match(patternSecondPart);
    for (let i = 0; i < lettersCapital.length; i++){
        for (let matchSecondPart of matchesSecondPart){
            let tokens = matchSecondPart.split(":").map(Number);
            let letterCode = tokens[0];
            let wordLength = tokens[1] + 1;

            if (lettersCapital[i] == String.fromCharCode(letterCode)){
                if (!lettersLength.has(lettersCapital[i])){
                    lettersLength.set(lettersCapital[i], wordLength);
                }
            }
        }
    }

    let thirdPart = input[2];
    let patternThirdPart = /(?<word>\S+)/g;
    let matchesThirdPart = thirdPart.match(patternThirdPart);
    for (let [key, value] of lettersLength){
        for (let matchThirdPart of matchesThirdPart) {
            let matchWord = matchThirdPart;
            let newMatchWord = "";
            for (let i = 0; i < matchWord.length; i++){
                if (matchWord[i].charCodeAt(0) >= 0 && matchWord[i].charCodeAt(0) <= 254 && matchWord[i].charCodeAt(0) != 32){
                    newMatchWord += matchWord[i];
                }
            }

            if (key == newMatchWord[0] && value == newMatchWord.length && value <= 20){
                console.log(newMatchWord);
                break;
            }
        }
    }




}

postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig');