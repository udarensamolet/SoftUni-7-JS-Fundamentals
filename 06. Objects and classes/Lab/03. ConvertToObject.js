function convertToObject (input) {
    let obj = JSON.parse(input);
    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}