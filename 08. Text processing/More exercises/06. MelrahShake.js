function melrahShake(input){
    let str = input[0];
    let pattern = input[1];

    while (true){
        let counter = 0;
        while (str.includes(pattern)){
            str = str.replace(pattern, "");
            counter++;
        }
        if (counter >= 2){
            console.log(`Shaked it.`);
        }
        
        let index = Math.floor(pattern.length / 2);
        pattern = pattern.replace(pattern[index], "");

        if (!str.includes(pattern)){
            console.log(`No shake.`);
            console.log(str);
            break;
        }
    }
}