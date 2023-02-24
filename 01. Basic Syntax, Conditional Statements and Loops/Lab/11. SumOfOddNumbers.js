function sumOfOddNumbers(n) {
    let count = 0;
    let sum = 0;
    let i = 0;
    while (count < n) {

        if (i % 2 != 0){
            console.log(i);
            sum += i;
            count++;
        }
        i++;
        
    }
    console.log(`Sum: ${sum}`);
}