function travelTime(input){
    let countries = new Map();
    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(' > ');
        let countryName = tokens[0];
        let townName = tokens[1];
        let travelCost = Number(tokens[2]);

        if (!countries.has(countryName)){
            countries.set(countryName, new Map());
            countries.get(countryName).set(townName, travelCost);
        } else {
            if(!countries.get(countryName).has(townName)){
                countries.get(countryName).set(townName, travelCost);
            } else {
                let oldTravelCost = countries.get(countryName).get(townName);
                if (oldTravelCost > travelCost){
                    countries.get(countryName).delete(townName, oldTravelCost);
                    countries.get(countryName).set(townName, travelCost);
                }
            }
        }
    }

    let sortedCountriesAlphabetically = Array.from(countries.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let country of sortedCountriesAlphabetically){
        let line = "";
        line += country[0] + " -> ";
        let sortedTowns = Array.from(country[1].entries()).sort((a, b) => a[1] - b[1]);
        for (let town of sortedTowns){
            line += town[0] + " -> " + town[1] + " ";
        }
        console.log(line.trimEnd());
    }
}