function meetings(input) {
    let meetingsCalendar = {};
    for (let i = 0; i < input.length; i++) {
        let entries = input[i].split(' ');
        let day = entries[0];
        let name = entries[1];
        if (!meetingsCalendar.hasOwnProperty(day)) {
            meetingsCalendar[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [key, value] of Object.entries(meetingsCalendar)){
        console.log(`${key} -> ${value}`);
    }
}

