function palindromeIntegers(input){
    for (let i = 0; i < input.length; i++){
        console.log(palindromeCheck(Number(input[i])));
    }

    function palindromeCheck(num){
        let isPalindrome = true;
        let str = num.toString();
        for (let i = 0; i < str.length / 2; i++){
            if (str[i] != str[str.length - 1 - i]){
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}