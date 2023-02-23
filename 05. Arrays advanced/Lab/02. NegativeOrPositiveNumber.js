function negativeOrPositiveNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        } else {
            newArr.unshift(arr[i]);
        }
    }
    for (let element of newArr){
        console.log(element);
    }
}