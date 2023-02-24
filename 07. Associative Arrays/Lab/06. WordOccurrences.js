function wordOccurences (input) {
    let count = new Map();
    for (let i = 0; i < input.length; i++) {
        let word = input[i];
        if (!count.has(word)) {
            count.set(word, 1);
        } else {
            count.set(word, Number(count.get(word)) + 1 );
        }
    }
    let sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted){
        console.log(`${key} -> ${value} times`)
    }
}

