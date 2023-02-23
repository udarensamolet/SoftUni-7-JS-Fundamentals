function lettersChangeNumbers(tokens) {
  let input = tokens.split(" ");
  let number = 0;
  let totalResult = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] != "") {
      let resultPresent = 0;
      let firstLetter = input[i][0];
      let lastLetter = input[i][input[i].length - 1];
      number = Number(input[i].substring(1, input[i].length - 1));

      if (firstLetter == firstLetter.toUpperCase()) {
        let index = firstLetter.toUpperCase().charCodeAt(0) - 64;
        resultPresent = number / index;
      } else if (firstLetter == firstLetter.toLowerCase()) {
        let index = firstLetter.toUpperCase().charCodeAt(0) - 64;
        resultPresent = number * index;
      }

      if (lastLetter == lastLetter.toUpperCase()) {
        let index = lastLetter.toUpperCase().charCodeAt(0) - 64;
        resultPresent -= index;
      } else if (lastLetter == lastLetter.toLowerCase()) {
        let index = lastLetter.toUpperCase().charCodeAt(0) - 64;
        resultPresent += index;
      }
      totalResult += resultPresent;
    }
  }
  console.log(totalResult.toFixed(2));
}