function reverseAnArrayOfStrings(arr) {
    let arrReversed = [];
    for (let i = 0; i < arr.length; i++) {
        arrReversed[arr.length - i - 1] = arr[i];
    }
    console.log(arrReversed.join(' '));
}