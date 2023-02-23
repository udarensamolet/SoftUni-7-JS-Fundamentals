function calculator(num1, num2, operator) {
    if (operator == 'multiply') {
        let multiplication = (a, b) => a * b;
        console.log(multiplication(num1, num2));
    } else if (operator == 'divide') {
        let division = (a, b) => a / b;
        console.log(division(num1, num2));
    } else if (operator == 'add') {
        let addition = (a, b) => a + b;
        console.log(addition(num1, num2));
    } else if (operator == 'subtract') {
        let subtraction = (a, b) => a - b;
        console.log(subtraction(num1, num2));
    }
}