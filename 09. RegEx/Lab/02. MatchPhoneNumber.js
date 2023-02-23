function matchPhoneNumber(input) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validPhones = [];

    while ((validPhone = regex.exec(input)) !== null) {
        validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(', '));
}

