function perfectNumber(number){
    if (sumProperDivisors(findProperDivisors(number)) == number){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    
    function findProperDivisors(n){
        let divisors = [];
        let divisor = n - 1;
        while (divisor > 0){
            if (n % divisor == 0){
                divisors.push(divisor);
            }
            divisor--;
        }
        return divisors;
    }

    function sumProperDivisors(divisors){
        let sum = 0;
        for (let i = 0; i < divisors.length; i++){
            sum += Number(divisors[i]);
        }
        return sum;
    }
} 