function valueOfAString(input){
    let str = input[0];
    let command = input[1];
    let totalSum = 0;

    if (command == "LOWERCASE"){

        for (let i = 0; i < str.length; i++){
            if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
                totalSum += str[i].charCodeAt(0);
            }
        }

    } else if (command == "UPPERCASE"){
        for (let i = 0; i < str.length; i++){
            if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
                totalSum += str[i].charCodeAt(0);
            }
        }
    }

    console.log(`The total sum is: ${totalSum}`);
}