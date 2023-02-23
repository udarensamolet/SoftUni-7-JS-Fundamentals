function ladybugs(tokens) {
  let fieldLength = Number(tokens[0]);
  let input = tokens[1].split(" ").map((i) => Number(i));

  let field = [];
  for (let i = 0; i < fieldLength; i++) {
    field[i] = 0;
  }

  for (let i = 0; i < fieldLength; i++) {
    for (let position of input) {
      if (i == position) {
        field[i] = 1;
      }
    }
  }

  let index = 2;
  while (index < tokens.length) {
    let command = tokens[index].split(" ");

    let bugStartIndex = Number(command[0]);
    let direction = command[1];
    let indexToMove = Number(command[2]);

    if (bugStartIndex >= 0 && bugStartIndex < fieldLength) {
      if (field[bugStartIndex] == 1) {
        field[bugStartIndex] = 0;
        if (direction == "right") {
          if (
            bugStartIndex + indexToMove < fieldLength &&
            bugStartIndex + indexToMove >= 0
          ) {
            for (
              let i = bugStartIndex + indexToMove;
              i < fieldLength;
              i += indexToMove
            ) {
              if (field[i] == 0) {
                field[i] = 1;
                break;
              }
            }
          }
        }
        if (direction == "left") {
          if (
            bugStartIndex - indexToMove >= 0 &&
            bugStartIndex - indexToMove < fieldLength
          ) {
            for (let i = bugStartIndex - indexToMove; i >= 0; i -= indexToMove) {
              if (field[i] == 0) {
                field[i] = 1;
                break;
              }
            }
          }
        }
      }
    }
    index++;
  }
  console.log(field.join(" "));
}