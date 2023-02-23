function distinctArray(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    let line = "";
    for (let i = 0; i < arr.length; i++){
        line += `${arr[i]} `;
    }
    console.log(line);
}