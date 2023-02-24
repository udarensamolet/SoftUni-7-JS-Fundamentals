function sequences(inputs){
    let arrays = new Set();
    for (let input of inputs){
        let token = JSON.parse(input);
        let sortedArray = token.sort((a, b) => b - a);
        if (arrays.size > 0){
            let equal = false;
            for (let arr of arrays){
                if (arr.length == sortedArray.length){
                    if (JSON.stringify(arr) == JSON.stringify(sortedArray)){
                        equal = true;
                        break;
                    }
                }
                equal = false;
            }
            if (!equal){
                arrays.add(sortedArray);
            }
        } else {
            arrays.add(sortedArray);
        }
    }
    let sortedArrays = Array.from(arrays).sort((a, b) => a.length - b.length);
    for(let sortedArray of sortedArrays){
        console.log(`[${sortedArray.join(", ")}]`);
    }
}