function makeADictionary(input) {
  let words = [];

  class Word {
    constructor(name, definition) {
      this.name = name;
      this.definition = definition;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let obj = JSON.parse(input[i]);
    let entry = new Word(Object.keys(obj)[0], Object.values(obj)[0]);
    let isModified = false;
    if (words.length > 0) {
      for (let word of words) {
        if (word.name == entry.name) {
          word.definition = entry.definition;
          isModified = true;
          break;
        }
      }
      if (!isModified){
        words.push(entry);
      }
    } else {
      words.push(entry);
    }
  }

  words.sort((a, b) => a.name.localeCompare(b.name));

  for (let word of words) {
    console.log(`Term: ${word.name} => Definition: ${word.definition}`);
  }
}