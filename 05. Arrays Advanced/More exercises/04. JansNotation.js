function jansNotation(input) {
  let operands = [];
  for (let i = 0; i < input.length; i++) {
    let token = input[i];
    if (Number.isFinite(token)) {
      operands.push(token);
    } else {
      if (operands.length < 2) {
        return console.log(`Error: not enough operands!`);
      } else {
        let operand2 = operands.pop();
        let operand1 = operands.pop();
        let result = 0;
        switch (token) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
        }
        operands.push(result);
      }
    }
  }
  if (operands.length > 1) {
    return console.log(`Error: too many operands!`);
  } else {
    return console.log(operands[0]);
  }
}