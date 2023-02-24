function storage(input) {
    let storages = new Map();
    for (let i = 0; i < input.length; i++) {
        let [product, quantity] = input[i].split(' ');
        if (!storages.has(product)) {
            storages.set(product, Number(quantity));
        } else {
            storages.set(product, storages.get(product) + Number(quantity));
        }
    }

    for (let [key, value] of storages) {
        console.log(`${key} -> ${value}`);
    }
}

