function maxNumber(input){
    let output = [];
    for (let i = 0; i < input.length - 1; i++){
        let isTopInteger = true;
        for (let j = i + 1; j < input.length; j++){
            if (input[i] <= input[j]){
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger){
            output.push(input[i])
        }
    }
    output.push(input[input.length - 1]); 
    let line = output.join(' ');
    console.log(line);
}