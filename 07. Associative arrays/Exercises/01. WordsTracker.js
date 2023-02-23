function wordsTracker(input) {
  let words = new Map(
    input
      .shift()
      .split(" ")
      .map((x) => [x, 0])
  );

  for (let word of input) {
    if (words.has(word)) {
      let quantity = words.get(word) + 1;
      words.set(word, quantity);
    }
  }
  
  let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sortedWords) {
    console.log(`${key} - ${value}`);
  }
}