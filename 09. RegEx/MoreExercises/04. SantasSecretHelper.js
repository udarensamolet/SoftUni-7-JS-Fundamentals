function santasSecretHelper(input){
    let key = Number(input[0]);
    for (let i = 1; i < input.length; i++){
        let line = input[i];
        if (line == "end"){
            break;
        }
        let sb = "";
        for (let j = 0; j < line.length; j++){
            let newValueChar = String.fromCharCode(line[j].charCodeAt(0) - key);
            sb += newValueChar;
        }
        let message = sb.toString();

        let pattern = /(?<name>@[A-Za-z]+)(?<character>[^@\-!:>]*)(?<behaviour>\![G]\!)/;
        let matches = message.match(pattern);
        if (matches != null){
            let nameWithSymbol = matches.groups.name;
            let name = nameWithSymbol.split("").splice(1, nameWithSymbol.length).join("");
            console.log(name);
        }
    }
}