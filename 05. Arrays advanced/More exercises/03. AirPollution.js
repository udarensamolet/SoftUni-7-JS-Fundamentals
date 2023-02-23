function airPolution(input, forces){
    let map = [];
    for (let i = 0; i < input.length; i++){
        map[i] = input[i].split(' ').map(x => Number(x));
    }

    for (let i = 0; i < forces.length; i++){
        let forcesTokens = forces[i].split(' ');
        let force = forcesTokens[0];
        
        if (force == "breeze"){
            let row = Number(forcesTokens[1]);
            for (let col = 0; col < 5; col++){
                map[row][col] -= 15;
                if (map[row][col] < 0){
                    map[row][col] = 0;
                }
            }
        } else if (force == "gale"){
            let col = Number(forcesTokens[1]);
            for (let row = 0; row < 5; row++){
                map[row][col] -= 20;
                if (map[row][col] < 0){
                    map[row][col] = 0;
                }
            }
        } else if (force == "smog"){
            let value = Number(forcesTokens[1]);
            for (let row = 0; row < 5; row++){
                for (let col = 0; col < 5; col++){
                    map[row][col] += value;
                }
            }
        }
    }

    let pollutedAreas = [];
    for (row = 0; row < 5; row++){
        for (let col = 0; col < 5; col++){
            if (map[row][col] >= 50){
                pollutedAreas.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedAreas.length > 0){
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}