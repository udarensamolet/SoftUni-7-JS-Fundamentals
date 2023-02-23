function firstAndLastKNumbers(arr) {
    let k = arr[0];
    let newArr = arr.slice(1);
    let firstArr = newArr.slice(0, k);
    let lastArr = newArr.slice(newArr.length - k);
    console.log(firstArr.join(' '));
    console.log(lastArr.join(' '));
}