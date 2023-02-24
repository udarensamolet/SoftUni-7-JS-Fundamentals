function equalNeighbours(matrix) {
  let counter = 0;

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length - 1; col++) {
      if (matrix[row][col] == matrix[row][col + 1]) {
        counter++;
      }
      if (matrix[row][col] == matrix[row + 1][col]) {
        counter++;
      }
    }
  }

  let lastRow = matrix.length - 1;
  for (let col = 0; col < matrix[lastRow].length - 1; col++) {
    if (matrix[lastRow][col] == matrix[lastRow][col + 1]) {
      counter++;
    }
  }

  for (let row = 0; row < matrix.length - 1; row++) {
    let lastCol = matrix[row].length - 1;
    if (matrix[row][lastCol] == matrix[row + 1][lastCol]) {
      counter++;
    }
  }
  console.log(counter);
}