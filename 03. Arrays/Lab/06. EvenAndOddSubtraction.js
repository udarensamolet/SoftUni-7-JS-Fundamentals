function evenAndOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    let sumDiff = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    sumDiff = sumEven - sumOdd;
    console.log(sumDiff);
}