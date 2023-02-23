function countStringOccurencies(text, word){
    let counter = 0;
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            counter++;
        }
    }
    console.log(counter);
}
