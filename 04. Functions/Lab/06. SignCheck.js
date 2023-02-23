function signCheck(num1, num2, num3) {
    if (num1 > 0) {
        if (num2 > 0) {
            if (num3 > 0) {
                console.log("Positive");
            } else {
                console.log("Negative");
            }
        } else {
            if (num3 > 0) {
                console.log("Negative");
            } else {
                console.log("Positive");
            }
        } 
    } else {
        if (num2 > 0) {
            if (num3 > 0) {
                console.log("Negative");
            } else {
                console.log("Positive");
            }
        } else {
            if (num3 > 0) 
            {
                console.log("Positive");
            } else {
                console.log("Negative");
            }
        }
    }
}