function rageQuit(tokens){
    let input = tokens.toString();
    let symbols = [];
    
    let pattern = /([^\d]+)([0-9]+)/g;
    let matches = input.match(pattern);

    let sb = "";
    let output = "";

    for (let match of matches){
        let matchString = match;
        let countOfRepetitionString = "";
        for (let i = 0; i < matchString.length; i++){
            if (!isNaN(matchString[i]) && matchString[i] != ' '){
                countOfRepetitionString += matchString[i];
            }
        }
        let countOfRepetitions = parseInt(countOfRepetitionString);
        sb = matchString.slice(0, matchString.length - countOfRepetitionString.length);
        output += sb.repeat(countOfRepetitions).toUpperCase();
    }
    
    for(let symbol of output){
        if (!symbols.includes(symbol)){
            symbols.push(symbol);
        }
    }
    console.log(`Unique symbols used: ${symbols.length}`);
    console.log(output);
}