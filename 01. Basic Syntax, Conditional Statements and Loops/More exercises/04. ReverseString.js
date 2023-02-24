function reverseString(input){
    let output = "";
    let arrayInputChar = input.split('');
    let reversedCharArray = arrayInputChar.reverse();
    output = reversedCharArray.join("");
    console.log(output);
}