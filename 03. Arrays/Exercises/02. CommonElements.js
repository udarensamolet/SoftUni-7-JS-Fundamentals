function commonElements(array1, array2){
    for (let element1 of array1){
        for (let element2 of array2){
            if (element1 === element2){
                console.log(element1);
            }
        }
    }
}