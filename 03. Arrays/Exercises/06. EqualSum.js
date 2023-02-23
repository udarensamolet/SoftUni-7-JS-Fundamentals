function equalSums(arr){
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < arr.length; i++){
        sumLeft = 0;
        sumRight = 0;
        if (i == 0){
            sumLeft = 0;
            for (let j = 1; j < arr.length; j++){
                sumRight += arr[j];
            }
        } else if (i == arr.length - 1){
            sumRight = 0;
            for (let j = 0; j < arr.length - 1; j++){
                sumLeft += arr[j];
            }
        } else {
            for (j = i + 1; j < arr.length; j++){
                sumRight += arr[j];
            }
            for (j = 0; j < i; j++){
                sumLeft += arr[j];
            }
        }

        if (sumLeft == sumRight)
        {
            console.log(`${i}`);
            break;
        }
    }

    if (sumLeft != sumRight){
        console.log(`no`);
    }
}