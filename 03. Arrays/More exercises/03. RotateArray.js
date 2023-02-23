function rotateArray(array){
    let steps = array.pop();
    for (let i = 0; i < steps; i++){
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}