function magicMatrices(matrix) {
  let sumsRows = [];
  let sumsCols = [];

  for (let row = 0; row < matrix.length; row++) {
    let sumCurrRow = 0;
    for (let col = 0; col < matrix[row].length; col++) {
      sumCurrRow += Number(matrix[row][col]);
    }
    sumsRows.push(Number(sumCurrRow));
  }

  let counter = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let sumCurrCol = 0;
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (col == counter) {
          sumCurrCol += Number(matrix[row][col]);
        }
      }
    }
    sumsCols.push(Number(sumCurrCol));
  }

  let sumRows = 0;
  let sumCols = 0;

  let areEqualSumsRows = true;
  for (let i = 0; i < sumsRows.length - 1; i++) {
    if (sumsRows[i] != sumsRows[i + 1]) {
      areEqualSumsRows = false;
      break;
    }
  }
  let areEqualSumsCols = true;
  for (let i = 0; i < sumsCols.length - 1; i++) {
    if (sumsCols[i] != sumsCols[i + 1]) {
      areEqualSumsCols = false;
      break;
    }
  }

  let checkElements = true;
  sumsRows.sort((a, b) => a - b);
  sumsCols.sort((a, b) => a - b);
  for (let i = 0; i < sumsRows.length; i++) {
    if (sumsRows[i] != sumsCols[i]) {
      checkElements = false;
      break;
    }
  }

  let proceed = false;
  if (checkElements) {
    if (areEqualSumsRows) {
      for (let i = 0; i < sumsRows.length; i++) {
        sumRows += Number(sumsRows[i]);
      }
    }
    if (areEqualSumsCols) {
      for (let i = 0; i < sumsCols.length; i++) {
        sumCols += Number(sumsCols[i]);
      }
    }
    proceed = true;
  }

  if (areEqualSumsRows && areEqualSumsCols && sumCols == sumRows && proceed) {
    console.log("true");
  } else {
    console.log("false");
  }
}