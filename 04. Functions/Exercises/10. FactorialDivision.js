function factorialDivision(a, b){
    console.log((calculateFactorial(a) / calculateFactorial(b)).toFixed(2));

    function calculateFactorial(n){
        let fact = 1;
        while (n > 1){
            fact *= n;
            n--;
        }
        return fact;
    }
}