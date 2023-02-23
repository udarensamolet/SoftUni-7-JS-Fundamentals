function winningTicket(tokens){
    let tickets = tokens.split(/[\s,]+/);
    for (let i = 0; i < tickets.length; i++){
        let ticket = tickets[i];
        if (ticket.length != 20){
            console.log("invalid ticket");
            continue;
        } else {
            let pattern = /[\#]{6,}|[\$]{6,}|[\@]{6,}|[\^]{6,}/;
            let ticketRightSide = ticket.substring(0, 10);
            let ticketLeftSide = ticket.substring(10, 20);

            let matchesLeftSide = ticketLeftSide.match(pattern);
            let matchesRigthSide = ticketRightSide.match(pattern);
            

            if (matchesRigthSide != null  && matchesLeftSide != null){
                if (matchesRigthSide[0][0] == matchesLeftSide[0][0]){
                    let matchesRightSideLength = matchesRigthSide[0].length;
                    let matchesLeftSideLength = matchesLeftSide[0].length;
                    let length = Math.min(matchesRightSideLength, matchesLeftSideLength);

                    if (length >= 6 && length <= 9){
                        console.log(`ticket \"${ticket}\" - ${length}${matchesRigthSide[0][0]}`);
                    } else if (length == 10){
                        console.log(`ticket \"${ticket}\" - ${length}${matchesRigthSide[0][0]} Jackpot!`);
                    } else {
                        console.log(`ticket \"${ticket}\" - no match`);
                    }
                } else {
                    console.log(`ticket \"${ticket}\" - no match`);
                }
            } else {
                console.log(`ticket \"${ticket}\" - no match`);
            }
        }
    }  
}