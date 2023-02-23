function asciiSumator(input){
    let firstChar = input[0];
    let secondChar = input[1];
    let str = input[2];
    
    let valueFirstChar = firstChar.charCodeAt(0);
    let valueSecondChar = secondChar.charCodeAt(0);
    let minValueChar = Math.min(valueFirstChar, valueSecondChar);
    let maxValueChar = Math.max(valueFirstChar, valueSecondChar);

    let sum = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt(0) > minValueChar && str[i].charCodeAt(0) < maxValueChar){
            sum += str[i].charCodeAt(0);
        }
    }

    console.log(sum);
}