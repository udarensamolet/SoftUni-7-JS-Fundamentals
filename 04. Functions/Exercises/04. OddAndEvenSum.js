function oddAndEvenSum(number) {
    let lastDigit = 0;

    let evenSum = 0;
    let oddSum = 0;

    while (number > 0){
        lastDigit = number % 10;
        number = Math.floor(number / 10);

        if (lastDigit % 2 == 0){
            evenSum += lastDigit;
        } else {
            oddSum += lastDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}