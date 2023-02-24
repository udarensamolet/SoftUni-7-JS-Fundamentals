function buildAWall(input){
    let heightSections = [...input].map(Number);

    let usedConcreteAll = [];
    while(true){
        let usedConcretePerDay = 0;
        let areAllBuilt = true;
        for (let i = 0; i < heightSections.length; i++){
            if (heightSections[i] < 30){
                heightSections[i]++;
                usedConcretePerDay += 195;
            }
        }
        usedConcreteAll.push(usedConcretePerDay);

        for (let i = 0; i < heightSections.length; i++){
            if (heightSections[i] < 30){
                areAllBuilt = false;
                break;
            }
        }

        if (areAllBuilt){
            break;
        }
    }
    let usedConcreteAllYards = 0;
    for (let i = 0; i < usedConcreteAll.length; i++){
        usedConcreteAllYards += usedConcreteAll[i];
    }
    let price = usedConcreteAllYards * 1900;
    console.log(usedConcreteAll.join(', '));
    console.log(`${price} pesos`);
}

buildAWall([21, 25, 28]);