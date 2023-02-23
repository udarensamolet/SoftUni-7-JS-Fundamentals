function arrayRotation(input, n){
    for (let i = 0; i < n; i++){
        let movedElement = input[0];
        for (let j = 0; j < input.length - 1; j++){
            input[j] = input[j + 1];
        }
        input[input.length - 1] = movedElement;
    }
    let line = "";
    for (let element of input){
        line += `${element} `;
    }
    console.log(line);
}