function piccolo(input){
    let parking = new Set();
    for(let car of input){
        let tokens = car.split(', ');
        let direction = tokens[0];
        let registrationNumber = tokens[1];

        if (direction == 'IN'){
            if (!parking.has(registrationNumber)){
                parking.add(registrationNumber);
            }
        } else if (direction == "OUT"){
            if (parking.has(registrationNumber)){
                parking.delete(registrationNumber);
            }
        }
    }

    if (parking.size == 0){
        console.log("Parking Lot Is Empty");
    } else {
        let sortedParking = Array.from(parking).sort((a, b) => a.localeCompare(b));
        for(let car of sortedParking){
            console.log(car);
        }
    }
}