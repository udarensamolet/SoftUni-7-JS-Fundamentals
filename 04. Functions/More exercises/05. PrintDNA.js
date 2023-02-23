function printDNA(rows) {
  let fullCycle = Math.floor(rows / 4);

  let sequence = createSequence(rows);
  let sequenceArray = sequence.split("");

  for (let i = 0; i < fullCycle; i++) {
    printFirstRow(sequenceArray.shift(), sequenceArray.shift());
    printSecondRow(sequenceArray.shift(), sequenceArray.shift());
    printThirdRow(sequenceArray.shift(), sequenceArray.shift());
    printForthRow(sequenceArray.shift(), sequenceArray.shift());
  }

  if (rows % 4 != 0) {
    let remainder = rows - fullCycle * 4;
    printFirstRow(sequenceArray.shift(), sequenceArray.shift());
    if (remainder == 2) {
      printSecondRow(sequenceArray.shift(), sequenceArray.shift());
    }
    if (remainder == 3) {
      printSecondRow(sequenceArray.shift(), sequenceArray.shift());
      printThirdRow(sequenceArray.shift(), sequenceArray.shift());
    }
  }

  function printFirstRow(symbol1, symbol2) {
    let line = `**` + symbol1 + symbol2 + "**";
    console.log(line);
  }

  function printSecondRow(symbol1, symbol2) {
    let line = `*` + symbol1 + "--" + symbol2 + "*";
    console.log(line);
  }

  function printThirdRow(symbol1, symbol2) {
    let line = symbol1 + "----" + symbol2;
    console.log(line);
  }

  function printForthRow(symbol1, symbol2) {
    let line = `*` + symbol1 + "--" + symbol2 + "*";
    console.log(line);
  }

  function createSequence(rows) {
    let originalSequence = "ATCGTTAGGG";
    let sequence = "";

    let length = rows * 2;

    if (length <= 10) {
      for (let i = 0; i < length; i++) {
        sequence += originalSequence[i];
      }
    } else {
      for (let i = 0; i < Math.floor(length / 10); i++) {
        sequence += originalSequence;
      }
      for (let i = 0; i < length - Math.floor(length / 10) * 10; i++) {
        sequence += originalSequence[i];
      }
    }
    return sequence;
  }
}