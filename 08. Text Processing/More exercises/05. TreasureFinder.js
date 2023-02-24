function treasureFinder(tokens){
    let key = tokens[0].split(" ");

    for (let i = 1; i < tokens.length; i++){
        let playKey = Array.from(key);
        let input = tokens[i];
        if (input == "find"){
            break;
        }

        let newKey = [];
        if (playKey.length < input.length){
            for (let j = 0; j < input.length; j++){
                let keyPart = playKey.shift();
                newKey.push(keyPart);
                playKey.push(keyPart);
            }
        } else {
            newKey = Array.from(playKey);
        }

        let alteredInput = "";
        for (let j = 0; j < input.length; j++){
            let result = input[j].charCodeAt(0) - newKey[j];
            alteredInput += String.fromCharCode(result);
        }

        let typeStart = alteredInput.indexOf('&') + 1;
        let typeEnd = alteredInput.lastIndexOf('&');
        let type = alteredInput.substring(typeStart, typeEnd);

        let coordinatesStart = alteredInput.indexOf('<') + 1;
        let coordinatesEnd = alteredInput.indexOf('>');
        let coordinates = alteredInput.substring(coordinatesStart, coordinatesEnd);
        
        console.log(`Found ${type} at ${coordinates}`);   
    }
}