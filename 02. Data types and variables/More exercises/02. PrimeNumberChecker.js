function primeNumberChecker(number){
    let isPrime = true;
    for (let i = 2; i < (Math.sqrt(number)).toFixed(0); i++){
        if (number % i == 0){
            isPrime = false;
            break;
        }
    }

    console.log(isPrime ? true : false);
}