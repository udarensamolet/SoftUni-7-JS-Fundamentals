function mergeArrays(arr1, arr2) {
  let arrResult = [];
  let line = "";
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
      arrResult[i] = Number(arr1[i]) + Number(arr2[i]);
    } else {
      arrResult[i] = arr1[i] + arr2[i];
    }
    
    if (i != arr1.length - 1){
        line += `${arrResult[i]} - `;
    } else {
        line += `${arrResult[i]}`
    }
  }
  console.log(line);
}