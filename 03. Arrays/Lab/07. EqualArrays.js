function equalArrays(arr1, arr2) {
    let identical = false;
    let index = 0;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            identical = true;
            sum += Number(arr1[i]);
        } else {
            identical = false;
            index = i;
            break;
        }
    }
    if (identical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else  {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}