function phonebook(arr) {
    let phonebook = {};
    for (let i = 0; i < arr.length; i++){
        let info = arr[i].split(' ');
        let name = info[0];
        let phoneNumber = info[1];
        if (!phonebook.hasOwnProperty(name)) {
            phonebook[name] = phoneNumber;
        } else {
            phonebook[name] = phoneNumber;
        }
    }

    for(let [key, value] of Object.entries(phonebook)) {
        console.log(`${key} -> ${value}`)
    }
}

