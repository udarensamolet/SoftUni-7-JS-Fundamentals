function convertToJSON(str1, str2, str3) {
    let person = {name: str1, lastName: str2, hairColor: str3};
    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}