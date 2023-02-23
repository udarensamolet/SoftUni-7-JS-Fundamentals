function oddOccurencies(input) {
  let words = new Map();
  let inputArr = input.split(" ");

  for (let word of inputArr) {
    let lowerWord = word.toLowerCase();
    if (!words.has(lowerWord)) {
      words.set(lowerWord, 1);
    } else {
      let newQuantity = words.get(lowerWord) + 1;
      words.set(lowerWord, newQuantity);
    }
  }

  let line = "";
  for (let [key, value] of words){
    if (value % 2 != 0){
      line += key + " ";
    }
  }

  console.log(line);
}