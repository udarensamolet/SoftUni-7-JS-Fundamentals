function hardWord(input) {
  let text = input[0];
  let textArray = text.split(" ");
  let words = input[1];

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i][0] == "_") {
      let wordLength = textArray[i].length;
      let hasPunctuation = false;
      if (textArray[i][textArray[i].length - 1] != "_") {
        wordLength--;
        hasPunctuation = true;
      }
      for (let word of words) {
        if (word.length == wordLength && !hasPunctuation) {
          textArray[i] = word;
          break;
        } else if (word.length == wordLength && hasPunctuation) {
          textArray[i] = word + textArray[i][textArray[i].length - 1];
          break;
        }
      }
    }
  }
  console.log(textArray.join(" "));
}