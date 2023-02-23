function serializeString(input){
    let tokens = input[0];
    let charPos = new Map();
    for (let i = 0; i < tokens.length; i++){
        let char = tokens[i];

        if (!charPos.has(char)){
            charPos.set(char, []);
        } 
        charPos.get(char).push(i);
    }

    for (let char of charPos){
        console.log(`${char[0]}:${char[1].join("/")}`);
    }
}