function train(input){
    let wagonsInput = input[0].split(' ');
    let wagons = wagonsInput.map(x => Number(x));
    let capacity = input[1];

    let line = "";

    for (let i = 2; i < input.length; i++){
        let commands = input[i].split(' ');
        if (commands[0] == "Add"){
            
            wagons.push(Number(commands[1]));
        } else {
            for (let j = 0; j < wagons.length; j++){
                if (Number(commands[0] <= capacity - wagons[j])){
                    wagons[j] += Number(commands[0]);
                    break;
                }
            }
        }
    }
    
    for (let i = 0; i < wagons.length; i++){
        line += `${wagons[i]} `;
    }
    console.log(line);
}