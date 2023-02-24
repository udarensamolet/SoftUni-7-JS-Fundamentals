function cardGame(input) {
    let people = new Map();

    for (let token of input){
        let tokens = token.split(': ');
        let name = tokens[0];
        let tokensCards = tokens[1].split(', ');

        if (!people.has(name)){
            people.set(name, new Set());
        }

        for (let i = 0; i < tokensCards.length; i++){
            people.get(name).add(tokensCards[i]);
        }
    }

    let peopleHands = new Map();
    for (let person of people){
        let name = person[0];
        let handSum = 0;
        for(let hands of person[1]){
            let pCode = hands[0];
            let tCode = hands[1];
            let pValue = 0;
            let tValue = 0;
            switch(pCode){
                case "2": pValue = 2; break;
                case "3": pValue = 3; break;
                case "4": pValue = 4; break;
                case "5": pValue = 5; break;
                case "6": pValue = 6; break;
                case "7": pValue = 7; break;
                case "8": pValue = 8; break;
                case "9": pValue = 9; break;
                case "1": pValue = 10; tCode = hands[2]; break;
                case "J": pValue = 11; break;
                case "Q": pValue = 12; break;
                case "K": pValue = 13; break;
                case "A": pValue = 14; break;
            }
            switch(tCode){
                case "S": tValue = 4; break;
                case "H": tValue = 3; break;
                case "D": tValue = 2; break;
                case "C": tValue = 1; break;
            }
            let handValue = pValue * tValue;
            handSum += handValue;
        }
        peopleHands.set(name, handSum);
    }
    
    for(let [key, value] of peopleHands){
        console.log(`${key}: ${value}`)
    }
}