function passwordValidator(input){
    printResult(input);

    function checkCharacters(str){
        let isValid = true;
        if (!(str.length >= 6 && str.length <= 10)){
            isValid = false;
        }
        return isValid;
    }

    function checkLettersAndDigits(str){
        let isValid = true;
        for (let i = 0; i < str.length; i++){
            if (!((str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) 
            || (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90)
            || (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122))) {
                isValid = false;
            }
        }
        return isValid;
    }

    function checkDigitsCount(str){
        let count = 0;
        let isValid = true;
        for (let i = 0; i < str.length; i++){
            if (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57){
                count++;
            }
        }
        if (count < 2){
            isValid = false;
        }
        return isValid;
    }

    function printResult(str){
        if (!checkCharacters(str)){
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!checkLettersAndDigits(str)){
            console.log(`Password must consist only of letters and digits`);
        }
        if (!checkDigitsCount(str)){
            console.log(`Password must have at least 2 digits`);
        }

        if (checkCharacters(str) && checkLettersAndDigits(str) && checkDigitsCount(str)){
            console.log(`Password is valid`);
        }
    }
}