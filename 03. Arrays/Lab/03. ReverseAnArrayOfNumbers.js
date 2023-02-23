function reverseAnArrayOfNumbers(n, arr) {
  let arrReversed = [];
  for (let i = 0; i < n; i++) {
    arrReversed[arr.length - i - 1] = arr[i];
  }

  console.log(arrReversed.join(" "));
}