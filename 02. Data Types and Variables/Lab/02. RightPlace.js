function rightPlace(strMissingChar, missingChar, strCompare) {
    let result = "";
    for (let i = 0; i < strMissingChar.length; i++) {
        if (strMissingChar[i] == "_") {
            result += missingChar;
        } else {
            result += strMissingChar[i];
        }
    }
    if (result == strCompare) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}