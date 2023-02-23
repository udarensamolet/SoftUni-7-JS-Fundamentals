function condenseArrayToNumber(arr) {
    let condensed = [];
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                condensed[j] = arr[j] + arr[j + 1];
            }
            arr = condensed;
        }
    } else {
        condensed[0] = arr[0];
    }
    
    console.log(condensed[0]);
}