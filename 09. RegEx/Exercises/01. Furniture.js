function furniture(input){
    let pattern = />>(?<furnitureType>[A-z]+)<<(?<price>[0-9]+[\.]?([0-9]+)?)!(?<quantity>[0-9]+)/;
    let totalPrice = 0;

    console.log(`Bought furniture: `);
    for (let i = 0; i < input.length; i++){
        let line = input[i];
        if (line == "Purchase"){
            break;
        }

        let result = line.match(pattern);
        if (result !== null){
            let furnitureType = result.groups.furnitureType;
            let price = Number(result.groups.price);
            let quantity = Number(result.groups.quantity);
            totalPrice += price * quantity;
            console.log(`${furnitureType}`);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}