function matchFullName(input) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let validNames = [];

    while ((validName = regex.exec(input)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}
