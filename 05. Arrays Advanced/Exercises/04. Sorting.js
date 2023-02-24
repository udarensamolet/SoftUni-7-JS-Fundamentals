function sorting(input){
    let resultArr = [];

    let array = input.sort((a, b) => a - b);

    while (array.length > 0){
        resultArr.push(array.pop());
        resultArr.push(array.shift());
    }
  
    console.log(resultArr.join(' '));
}