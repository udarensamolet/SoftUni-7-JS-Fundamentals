function tseamAccount(input){
    let games = input.shift().split(' ');
    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(' ');
        let command = tokens[0];
        let game = tokens[1];
        if (command == "Install"){
            if (!games.includes(game)){
                games.push(game);
            }
        } else if (command == "Uninstall"){
            if (games.includes(game)){
                games.splice(games.indexOf(game), 1);
            }
        } else if (command == "Update") {
            if (games.includes(game)){
                games.splice(games.indexOf(game), 1);
                games.push(game);
            }
        } else if (command == "Expansion"){
            let gameExpansionInfo = game.split('-');
            let gameName = gameExpansionInfo[0];
            let expansion = gameExpansionInfo[1];
            if (games.includes(gameName)){
                let index = games.indexOf(gameName);
                games.splice(index + 1, 0, `${gameName}:${expansion}`);
            }
        } else if (command == "Play!"){
            break;
        }
    }
    console.log(games.join(' '));
}