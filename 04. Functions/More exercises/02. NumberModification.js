function numberModification(number){
    while (checkAverageValue(number) <= 5){
        number = appendDigitAtEnd(number);
    }

    console.log(number);

    function checkAverageValue(number){
        let sum = 0;
        let counter = 0;
        while (number > 0){
            let lastDigit = Math.floor(number % 10);
            sum += lastDigit;
            number = Math.floor(number / 10);
            counter++;
        }
        let averageValue = sum / counter;
        return averageValue;
    }

    function appendDigitAtEnd(number){
        let numberString = number.toString();
        numberString += "9";
        return number = parseInt(numberString);
    }
}