function dungeonestDark(input){
    let health = 100;
    let coins = 0;

    let maxAttack = Number.MIN_SAFE_INTEGER;
    let bestRoom = 0;
    let isAlive = true;

    let inputString = String(input);
    let tokens = inputString.split("|");

    for (let i = 0; i < tokens.length; i++) {
        let tokensArray = tokens[i].split(' ');
        let itemMonster = tokensArray[0];
        let quantity = Number(tokensArray[1]);

        if (itemMonster == "potion"){
            let currHealth = quantity;
            health += currHealth;
            if (health > 100){
                currHealth = 100 - health + currHealth;
                health = 100;
            }
            console.log(`You healed for ${currHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemMonster == "chest"){
            let currCoins = quantity;
            coins += currCoins;
            console.log(`You found ${currCoins} coins.`);
        } else {
            let monsterAttack = quantity;

            if (monsterAttack > maxAttack){
                maxAttack = monsterAttack;
                bestRoom = i + 1;
            }

            health -= monsterAttack;
            if (health > 0){
                console.log(`You slayed ${itemMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${bestRoom}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}