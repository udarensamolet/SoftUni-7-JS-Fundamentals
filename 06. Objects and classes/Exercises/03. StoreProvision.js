function storeProvision(currentStock, orderedStock){
    class Product {
        constructor(name, quantity){
            this.name = name;
            this.quantity = quantity;
        }
    }

    let products = [];

    for (let i = 0; i < currentStock.length; i += 2){
        let name = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        let product = new Product(name, quantity);
        products.push(product);
    }    

    for (let i = 0; i < orderedStock.length; i += 2){
        let name = orderedStock[i];
        let quantity = Number(orderedStock[i + 1]);

        let product = new Product(name, quantity);

        let isIncluded = true;
        for (let i = 0; i < products.length; i++){
            if (products[i].name == product.name){
                products[i].quantity += product.quantity;
                isIncluded = true;
                break;
            } else {
                isIncluded = false;
            }
        }
        if (!isIncluded){
            products.push(product);
        }
    }
    

    for(let i = 0; i < products.length; i++){
        console.log(`${products[i].name} -> ${products[i].quantity}`);
    }
}