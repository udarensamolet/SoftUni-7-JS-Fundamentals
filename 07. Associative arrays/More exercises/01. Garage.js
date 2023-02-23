function garage(inputs){
    // 80/100 точки
    let garages = [];
    for (let input of inputs){
        let tokens = input.split(" - ");
        let garageNumber = Number(tokens[0]);
        let obj = {"Garage number": garageNumber};
        let infoTokens = tokens[1].split(", ");
        for (let infoToken of infoTokens){
            let info = infoToken.split(": ");
            obj[info[0]] = info[1];
        }
        garages.push(obj);
    }

    let currentNumber = Number.MIN_SAFE_INTEGER;
    let sortedGarages = Array.from(garages).sort((a, b) => a["Garage number"] - b["Garage number"]);
    for (let garage of sortedGarages){
        if (garage["Garage number"] != currentNumber){
            console.log(`Garage № ${garage["Garage number"]}`);
        } 
        let line = "";
        for (let [key, value] of Object.entries(garage)){
            if (key != "Garage number"){
                line += key + " - " + value + ", ";
            }
           
        }
        console.log(`--- ${line.slice(0, line.length - 2)}`);
        currentNumber = garage["Garage number"];
    }
}