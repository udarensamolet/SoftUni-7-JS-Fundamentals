function processOddNumbers(arr) {
  arrOdd = [];
  for (let i = 0; i < arr.length; i++) {
      if (i % 2 != 0){
          arrOdd.push(arr[i] * 2);
      }
  }

  let arrOddRev = arrOdd.reverse();

  console.log(arrOddRev.join(' '));
}