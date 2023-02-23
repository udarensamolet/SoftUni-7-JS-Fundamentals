function integerAndFloat(firstN, secondN, thirdN) {
    let sum = firstN + secondN + thirdN;
    let type = "";

    if (sum % 1 === 0) {
        type = "Integer";
    } else {
        type = "Float";
    }
    
    console.log(`${sum} - ${type}`)
}