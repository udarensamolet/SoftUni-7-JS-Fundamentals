function partyTime(input){
    let vipGuests = [];
    let ordinaryGuests = [];
    let startPosition = 0;

    for(let i = 0; i < input.length; i++){
        let token = input[i];
        let guest = token;
        if (token == "PARTY"){
            startPosition = i;
            break;
        } else {
            let firstChar = token[0];
            if(Number.isInteger(firstChar)){
                vipGuests.push(guest);
            } else {
                ordinaryGuests.push(guest);
            }
        }
    }

    for (let i = startPosition + 1; i < input.length; i++){
        let guest = input[i];
        let firstChar = guest[0];
        if (Number.isInteger(firstChar)){
            if (vipGuests.includes(guest)){
                vipGuests.splice(vipGuests.indexOf(guest), 1);
            }
        } else {
            if (ordinaryGuests.includes(guest)){
                ordinaryGuests.splice(ordinaryGuests.indexOf(guest), 1);
            }
        }
    }

    let countGuests = vipGuests.length + ordinaryGuests.length;
    console.log(countGuests);
    for (let guest of vipGuests){
        console.log(guest);
    }
    for (let guest of ordinaryGuests){
        console.log(guest);
    }
}