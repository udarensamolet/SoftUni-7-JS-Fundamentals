function listOfProducts(arr) {
    let arrSorted = arr.sort();
    for (let i = 0; i < arrSorted.length; i++) {
        console.log(`${i + 1}.${arrSorted[i]}`);
    }
}