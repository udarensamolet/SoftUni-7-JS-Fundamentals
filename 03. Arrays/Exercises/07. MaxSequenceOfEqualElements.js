function maxSequenceOfEqualElements(arr){
    let counter = 1;
    let number = 0;

    let maxCounter = 0;

    for (let i = 0; i < arr.length; i++){
        counter = 1;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                counter++;

                if (counter > maxCounter){
                    maxCounter = counter;
                    number = arr[i];
                }
            } else {
                counter = 1;
                break;
            }
        }
    }

    let line = "";
    for (let i = 0; i < maxCounter; i++){
        line += `${number} `;
    }
    console.log(line);
}