function printNthElement(input){
    let line = "";
    let step = Number(input.pop());
    for (let i = 0; i < input.length; i += step){
        line += `${input[i]} `;
    }
    console.log(line);
}