function diagonalAttack(input){
    let matrix = [];
    for (let i = 0; i < input.length; i++){
        matrix[i] = input[i].split(' ').map(x => Number(x));
    }

    let sumMainDiagonal = 0;
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            if (row == col){
                sumMainDiagonal += matrix[row][col];
            }
        }
    }
    
    let sumSecondaryDiagonal = 0;
    let secondaryDiagnol = [];
    for (let i = 0; i < matrix.length; i++){
        sumSecondaryDiagonal += matrix[i][matrix.length - i - 1];
        secondaryDiagnol.push(matrix[i][matrix.length - i - 1]);
    }

    if (sumMainDiagonal == sumSecondaryDiagonal){
        for (let row = 0; row < matrix.length; row++){
            for (let col = 0; col < matrix[row].length; col++){
                if ((row != col) ){
                    matrix[row][col] = sumMainDiagonal;
                }
            }
        }
        for (let i = 0; i < matrix.length; i++){
            matrix[i][matrix.length - i - 1] = secondaryDiagnol.shift();
        }
    }

    //print matrix
    for (let i = 0; i < matrix.length; i++){
        let line = "";
        for (let j = 0; j < matrix[i].length; j++){
            line += `${matrix[i][j]} `;
        }    
        console.log(line);
    }
}