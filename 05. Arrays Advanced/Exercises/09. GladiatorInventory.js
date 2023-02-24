function gladiatorInventory(input){
    let inventory = input[0].split(' ');
    for (let i = 1; i < input.length; i++){
        let tokens = input[i].split(' ');
        let command = tokens[0];
        if (command == "Buy"){
            let equipment = tokens[1];
            if (!inventory.includes(equipment)){
                inventory.push(equipment);
            }
        }
        else if (command == "Trash"){
            let equipment = tokens[1];
            if (inventory.includes(equipment)){
                inventory.splice(inventory.indexOf(equipment), 1);
            }
        }
        else if (command == "Repair"){
            //check this one
            let equipment = tokens[1];
            if (inventory.includes(equipment)){
                inventory.push(inventory.splice(inventory.indexOf(equipment), 1));
            }
        }
        else if (command == "Upgrade"){
            let localTokens = tokens[1].split('-');
            let equipment = localTokens[0];
            let upgrade = localTokens[1];
            if (inventory.includes(equipment)){
                inventory.splice(inventory.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}