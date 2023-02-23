function loadingBars(number){
    let posPercent = number / 10;
    let line = "";
    for (let i = 1; i <= 10; i++){
        if ( i <= posPercent){
            line += "%";
        } else {
            line += ".";
        }
    }

    if (number < 100){
        console.log(`${number}% [${line}]`);
        console.log(`Still loading...`);
    } else if (number == 100){
        console.log(`${number}% Complete!`);
        console.log(`[${line}]`);
    }
}