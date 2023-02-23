function city(city) {
    let properties = Object.entries(city);
    for (let [key, value] of properties){
        console.log(`${key} -> ${value}`);
    }
}