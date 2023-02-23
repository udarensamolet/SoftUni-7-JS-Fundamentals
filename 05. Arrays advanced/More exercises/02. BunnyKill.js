function bunnyKill(input) {
  let bunniesWithBombs = input.pop().split(" ");

  let matrix = [];
  for (let i = 0; i < input.length; i++) {
    matrix.push([]);
  }

  for (let i = 0; i < input.length; i++) {
    let currinputTokens = input[i].split(' ');
    for (let j = 0; j < currinputTokens.length; j++) {
      matrix[i][j] = Number(currinputTokens[j]);
    }
  }

  let snowballDamage = 0;
  let snowballKills = 0;

  for (let i = 0; i < bunniesWithBombs.length; i++) {
    let bunnyTokens = bunniesWithBombs[i].split(",");
    let bunnyRow = Number(bunnyTokens[0]);
    let bunnyCol = Number(bunnyTokens[1]);

    
    let bunnyDamage =matrix[bunnyRow][bunnyCol];

    if (bunnyDamage != 0) {
      snowballDamage += bunnyDamage;
      snowballKills++;
      if (bunnyRow - 1 >= 0 && bunnyCol - 1 >= 0) {
        if (Number(matrix[bunnyRow - 1][bunnyCol - 1]) <= bunnyDamage) {
          matrix[bunnyRow - 1][bunnyCol - 1] = 0;
        } else {
          matrix[bunnyRow - 1][bunnyCol - 1] -= bunnyDamage;
        }
      }
      if (bunnyRow - 1 >= 0) {
        if (Number(matrix[bunnyRow - 1][bunnyCol]) <= bunnyDamage) {
          matrix[bunnyRow - 1][bunnyCol] = 0;
        } else {
          matrix[bunnyRow - 1][bunnyCol] -= bunnyDamage;
        }
      }
      if (bunnyRow - 1 >= 0 && bunnyCol + 1 < matrix[bunnyRow - 1].length) {
        if (Number(matrix[bunnyRow - 1][bunnyCol + 1]) <= bunnyDamage) {
          matrix[bunnyRow - 1][bunnyCol + 1] = 0;
        } else {
         matrix[bunnyRow - 1][bunnyCol + 1] -= bunnyDamage;
        }
      }

      if (bunnyCol - 1 >= 0) {
        if (Number(matrix[bunnyRow][bunnyCol - 1]) <= bunnyDamage) {
          matrix[bunnyRow][bunnyCol - 1] = 0;
        } else {
          matrix[bunnyRow][bunnyCol - 1] -= bunnyDamage;
        }
      }

      if (bunnyCol + 1 < matrix[bunnyRow].length) {
        if (Number(matrix[bunnyRow][bunnyCol + 1]) <= bunnyDamage) {
          matrix[bunnyRow][bunnyCol + 1] = 0;
        } else {
          matrix[bunnyRow][bunnyCol + 1] -= bunnyDamage;
        }
      }
      if (bunnyRow + 1 < matrix.length && bunnyCol - 1 >= 0) {
        if (Number(matrix[bunnyRow + 1][bunnyCol - 1]) <= bunnyDamage) {
          matrix[bunnyRow + 1][bunnyCol - 1] = 0;
        } else {
         matrix[bunnyRow + 1][bunnyCol - 1] -= bunnyDamage;
        }
      }
      if (bunnyRow + 1 < matrix.length) {
        if (Number(matrix[bunnyRow + 1][bunnyCol]) <= bunnyDamage) {
          matrix[bunnyRow + 1][bunnyCol] = 0;
        } else {
          matrix[bunnyRow + 1][bunnyCol] -= bunnyDamage;
        }
      }
      if (
        bunnyRow + 1 < matrix.length &&
        bunnyCol + 1 < matrix[bunnyRow + 1].length
      ) {
        if (Number(matrix[bunnyRow + 1][bunnyCol + 1]) <= bunnyDamage) {
          matrix[bunnyRow + 1][bunnyCol + 1] = 0;
        } else {
          matrix[bunnyRow + 1][bunnyCol + 1] -= bunnyDamage;
        }
      }
    }
    matrix[bunnyRow][bunnyCol] = 0;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (Number(matrix[i][j]) > 0) {
        snowballDamage += Number(matrix[i][j]);
        snowballKills++;
        matrix[i][j] = 0;
      }
    }
  }

  console.log(snowballDamage);
  console.log(snowballKills);
}