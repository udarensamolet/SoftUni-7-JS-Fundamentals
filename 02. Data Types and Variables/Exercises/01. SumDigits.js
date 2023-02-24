function sumDigits(number){
    let sum = 0;
    while (number > 0){
        let lastDigit = Math.floor(number % 10);
        sum += lastDigit;
        number /= 10;
    }
    console.log(sum);
}