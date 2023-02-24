function triplesOfLatinLetter(n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let letterI = String.fromCharCode(97 + i);
                let letterJ = String.fromCharCode(97 + j);
                let letterK = String.fromCharCode(97 + k);
                console.log(`${letterI}${letterJ}${letterK}`);
            }
        }
    }
}