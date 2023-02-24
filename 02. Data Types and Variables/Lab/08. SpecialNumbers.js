function specialNumbers(n) {
    for (let number = 1; number <= n; number++) {
        let sum = 0;
        number = number.toString();
        for (let j = 0; j < number.length; j++){
            sum += Number(number[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${number} -> True`);
        } else {
            console.log(`${number} -> False`);
        }
    }
}