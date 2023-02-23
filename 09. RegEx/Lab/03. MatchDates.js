function matchDates(input) {
    let regex = /\b(?<day>[0-9]{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})/g;
    while ((validDate = regex.exec(input)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }    
}
