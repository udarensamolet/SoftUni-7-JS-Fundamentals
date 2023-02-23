function flightSchedule(input){
    let flightsInput = input[0];
    let flightsChangedInput = input[1];
    let statusCheck = input[2];

    let flights = [];
    for (let i = 0; i < flightsInput.length; i++){
        let tokens = flightsInput[i].split(' ');
        let flight = {flight: tokens[0], destination: tokens[1], status: "Ready to fly"};
        flights.push(flight);
    }

    for (let i = 0; i < flightsChangedInput.length; i++){
        let tokens = flightsChangedInput[i].split(' ');
        for (let flight of flights){
            if (flight.flight == tokens[0]){
                flight.status = tokens[1];
            }
        }
    }

    for (let flight of flights){
        if (flight.status == statusCheck){
            console.log(`{ Destination: \'${flight.destination}\', Status: \'${flight.status}\' }`);
        }
    }
}