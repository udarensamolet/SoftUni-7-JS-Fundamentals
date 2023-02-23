function softuniBarIncome(input){
    let pattern = /[^|$%.]*?%[^|$%.]*?(?<name>[A-Z][a-z]+)%[^|$%.]*?\<[^|$%.]*?(?<product>\w+)[^|$%.]*?\>[^|$%.]*?\|[^|$%.]*?(?<count>[0-9]+)[^|$%.]*?\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)[^|$%.]*?\$/;
    let totalPrice = 0;

    for (let i = 0; i < input.length; i++){
        let line = input[i];

        if (line === "end of shift"){
            console.log(`Total income: ${totalPrice.toFixed(2)}`);
            break;
        }

        let result = line.match(pattern);
        if (result !== null){
            let name = result.groups.name;
            let product = result.groups.product;
            let count = Number(result.groups.count);
            let price = Number(result.groups.price);

            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
            totalPrice += count * price;
        }
    }
}