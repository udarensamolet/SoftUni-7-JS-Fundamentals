function searchForANumber(arr, tokens){
    let countOfElementsToTake = tokens[0];
    let countOfElementsToDelete = tokens[1];
    let element = tokens[2];
    let countOccurencies = 0;

    let newArr = arr.slice(0, countOfElementsToTake);
    newArr.splice(0, countOfElementsToDelete);
    
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] == element){
            countOccurencies++;
        }
    }
    console.log(`Number ${element} occurs ${countOccurencies} times.`);
}