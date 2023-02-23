function armies(input){
    let generals = new Map();
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token.includes("arrives")){
            let generalName = token.slice(0, token.length - 8);
            if (!generals.has(generalName)){
                generals.set(generalName, new Map());
            }
        } else if (token.includes(": ")){
            let infoTokens = token.split(": ");
            let generalName = infoTokens[0];
            let armyTokens = infoTokens[1].split(", ");
            let armyName = armyTokens[0];
            let armyCount = Number(armyTokens[1]);

            if (generals.has(generalName)){
                if (!generals.get(generalName).has(armyName)){
                    generals.get(generalName).set(armyName, armyCount);
                }
            }
        } else if (token.includes(" + ")){
            let infoTokens = token.split(" + ");
            let armyName = infoTokens[0];
            let armyCount = Number(infoTokens[1]);

            for (let general of generals){
                if (general[1].has(armyName)){
                    general[1].set(armyName, Number(general[1].get(armyName) + armyCount));
                    break;
                }
            }
        } else if (token.includes("defeated")){
            let generalName = token.slice(0, token.length - 9);
            if (generals.has(generalName)){
                generals.delete(generalName);
            }
        }    
    }

    let generalsTotalArmyCount = new Map();
    for (let general of generals){
        let totalCount = 0;
        for (let army of general[1]){
            totalCount += army[1];
        }
        generalsTotalArmyCount.set(general[0], totalCount);
    }
    
    let sortedGeneralTotalArmyCount = Array.from(generalsTotalArmyCount.entries()).sort((a, b) => b[1] - a[1]);

    for (let general of sortedGeneralTotalArmyCount){
        console.log(`${general[0]}: ${general[1]}`);
        for (let generalByArmies of generals){
            if (general[0] == generalByArmies[0]){
                let sortedArmies = Array.from(generalByArmies[1].entries()).sort((a, b) => b[1] - a[1]);
                for (let army of sortedArmies){
                    console.log(`>>> ${army[0]} - ${army[1]}`);
                }
                
            }
        }
    }
}