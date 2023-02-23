function carWash(input){
    let cleanCar = 0;
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token == "soap"){
            cleanCar += soap(cleanCar);
        } else if (token == "water"){
            cleanCar += water(cleanCar);
        } else if (token == "vacuum cleaner") {
            cleanCar +=  vacuumCleaner(cleanCar);
        } else if (token == "mud"){
            cleanCar -= mud(cleanCar);
        }
    }
    console.log(`The car is ${cleanCar.toFixed(2)}% clean.`);


    function soap(cleanCar){
        cleanCar = 10;
        return cleanCar;
    }

    function water(cleanCar){
        cleanCar = cleanCar * 0.20;
        return cleanCar;
    }

    function vacuumCleaner(cleanCar){
        cleanCar = cleanCar * 0.25;
        return cleanCar;
    }
    
    function mud(cleanCar){
        cleanCar = cleanCar * 0.10;
        return cleanCar;
    }
}