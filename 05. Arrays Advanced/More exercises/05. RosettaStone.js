function rosettaStone(input) {
  let templateMatrixLength = Number(input.shift());

  let templateMatrix = [];
  for (let i = 0; i < templateMatrixLength; i++) {
    templateMatrix[i] = input
      .shift()
      .split(" ")
      .map((x) => Number(x));
  }

  let message = [];
  for (let i = 0; i < input.length; i++) {
    message[i] = input[i].split(" ").map((x) => Number(x));
  }

  decodingWithA2DMatrix(message, templateMatrix);

  let rosetta = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let line = "";
  for (let row = 0; row < message.length; row++) {
    for (let col = 0; col < message[row].length; col++) {
      let position = Number(message[row][col]);
      if (position < 27) {
        message[row][col] = rosetta[position];
      } else {
        message[row][col] = rosetta[position - Math.floor(position / 27) * 27];
      }
      line += message[row][col];
    }
  }
  console.log(line.trim());

  function decodingWithA2DMatrix(message, templateMatrix) {
    for (let row = 0; row < message.length; row++) {
      for (let col = 0; col < message[row].length; col++) {
        message[row][col] +=
          templateMatrix[row % templateMatrix.length][
            col % templateMatrix[0].length
          ];
      }
    }
  }
}