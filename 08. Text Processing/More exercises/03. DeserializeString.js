function deserializeString(input){
    let maxPos = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] != "end"){
            let tokens1 = input[i].split(":");
            let tokens2 = tokens1[1].split("/");

            for (let j = 0; j < tokens2.length; j++){
                let currPos = Number(tokens2[j]);
                if (currPos > maxPos){
                    maxPos = currPos;
                }
            }
        }
    }

    let resultString = "*".repeat(maxPos + 1);
    let result = resultString.split("");
    for (let i = 0; i < input.length; i++){
        if (input[i] != "end"){
            let tokens1 = input[i].split(":");
            let letter = tokens1[0];
            let tokens2 = tokens1[1].split("/");

            for (let j = 0; j < tokens2.length; j++){
                result[Number(tokens2[j])] = letter;
            }
        }
    }   
    console.log(result.join(""));
}