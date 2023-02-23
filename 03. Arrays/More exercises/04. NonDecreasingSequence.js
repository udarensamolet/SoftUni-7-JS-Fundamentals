function nonDecreasingSequence(input){
    let max = input[0];
    let filteredInput = input.filter(x => {
        if (x >= max){
            max = x;
        }
        return x >= max;
    });
    console.log(filteredInput.join(' '));
}