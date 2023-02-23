function charactersInRange(char1, char2){
    let indexChar1 = Number(gettingCharCode(char1));
    let indexChar2 = Number(gettingCharCode(char2));

    let line = "";
    for (let i = Math.min(indexChar1, indexChar2) + 1; i < Math.max(indexChar1, indexChar2); i++){
        let currChar = String.fromCharCode(i);
        line += `${currChar} `;
    }
    console.log(line);

    function gettingCharCode(char){
        let index = 0;
        return char.charCodeAt(index);
    }
}