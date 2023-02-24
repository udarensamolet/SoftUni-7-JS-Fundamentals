function smallestTwoNumbers(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  let slicedSortedArr = sortedArr.slice(0, 2);
  console.log(slicedSortedArr.join(' '));
}