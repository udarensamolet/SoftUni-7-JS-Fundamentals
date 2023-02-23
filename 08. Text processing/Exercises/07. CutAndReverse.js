function cutAndReverse(input){
    let firstHalf = input.slice(0, input.length / 2);
    let secondHalf = input.slice(input.length / 2, input.length);

    let firstHalfReversed = firstHalf.split("").reverse().join("");
    let secondHalfReversed = secondHalf.split("").reverse().join("");
    
    console.log(firstHalfReversed);
    console.log(secondHalfReversed);
}