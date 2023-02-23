function spiceMustFlow(yieldPerDay){
    let countDays = 0;
    let yieldExtracted = 0;

    if (yieldPerDay >= 100){
        while (yieldPerDay >= 100){
            countDays++;
            if (countDays == 1){
                yieldExtracted = yieldPerDay - 26;
            } else {
                yieldExtracted += (yieldPerDay - 26);
            }
            yieldPerDay -= 10;
        }
        yieldExtracted -= 26;
        console.log(countDays);
        console.log(yieldExtracted);
    } else {
        console.log(0);
        console.log(0);
    }
}