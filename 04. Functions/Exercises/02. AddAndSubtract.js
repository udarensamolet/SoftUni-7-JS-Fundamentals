function addAndSubtract(num1, num2, num3){
    let addition = (a, b) => a + b;
    let subtraction = (a, b) => a - b;
    console.log(subtraction(addition(num1, num2), num3));
}