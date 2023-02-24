function sortAndArrayByTwoCriteria(input) {
  let resultArr = [];
  resultArr = input.sort((a, b) => {
    if (a.length - b.length != 0) {
      return a.length - b.length;
    } else {
        return a.localeCompare(b);
    }
  });
  for (var element of resultArr){
      console.log(element);
  }
}