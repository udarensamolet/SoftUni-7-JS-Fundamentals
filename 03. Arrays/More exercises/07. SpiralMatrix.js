function spiralMatrix(row, col){
    let matrix = [];
    for (let i = 0; i < row; i++){
        matrix[i] = [];
    }

    let rightRow = 0;
    let rightCol = 0;
    let rightLimit = col;

    let downRow = 1;
    let downCol = col - 1;
    let downLimit = col - 1;

    let leftRow = col - 1;
    let leftCol = col - 2;
    let leftLimit = col - 1;

    let upRow = row - 2;
    let upCol = 0;
    let upLimit = row - 2;

    let totalCounter = 1;

    while (totalCounter <= row * col){
        //right
        for (let i = 0; i < rightLimit; i++){
            matrix[rightRow][rightCol + i] = totalCounter;
            totalCounter++;
            if (totalCounter > row * col){
                break;
            }
        }   
        rightRow++;
        rightCol++;
        if (rightLimit - 2 < 0){
            rightLimit = 0;
        } else {
            rightLimit -= 2;
        }

        //down
        for (let i = 0; i < downLimit; i++){
            matrix[downRow + i][downCol] = totalCounter;
            totalCounter++;
            if (totalCounter > row * col){
                break;
            }
        }
        downRow++;
        downCol--;
        if (downLimit - 2 < 0){
            downLimit = 0;
        } else {
            downLimit -= 2;
        }

        //left
        for (let i = 0; i < leftLimit; i++){
            matrix[leftRow][leftCol - i] = totalCounter;
            totalCounter++;
            if (totalCounter > row * col){
                break;
            }
        }
        leftRow--;
        leftCol--;
        if (leftLimit - 2 < 0){
            leftLimit = 0;
        } else {
            leftLimit -= 2;
        }

        //up
        for (let i = 0; i < upLimit; i++){
            matrix[upRow - i][upCol] = totalCounter;
            totalCounter++;
            if (totalCounter > row * col){
                break;
            }
        }
        upRow--;
        upCol++;
        if (upLimit - 2 < 0){
            upLimit = 0;
        } else {
            upLimit -= 2;
        }
    }
    
    for (let i = 0; i < matrix.length; i++){
        let line = "";
        for (let j = 0; j < matrix[i].length; j++){
            line += `${matrix[i][j]} `;
        }    
        console.log(line);
    }
}