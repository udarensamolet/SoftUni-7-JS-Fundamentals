function racers(tokens){
    let racers = tokens[0].split(", ");
    let actualRacers = new Map();

    let patternRacerNames = /[A-Za-z]/g;
    let patternRacerDistance = /[0-9]/g;

    for (let i = 1; i < tokens.length; i++){
        let input = tokens[i];
        if (input == "end of race"){
            break;
        }

        let matchRacerName = input.match(patternRacerNames).join("");
        let distances = input.match(patternRacerDistance).map(Number);
        let totalDistance = 0;
        for (let distance of distances){
            totalDistance += distance;
        }

        if (racers.includes(matchRacerName)){
            if (!actualRacers.has(matchRacerName)){
                actualRacers.set(matchRacerName, totalDistance);
            } else{
                let currTotalDistance = actualRacers.get(matchRacerName);
                actualRacers.delete(matchRacerName);
                actualRacers.set(matchRacerName, currTotalDistance + totalDistance);
            }
        }
    }

    let sortedRacers = Array.from(actualRacers.entries()).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}