function bitCoinMining(input){
    let goldMinedGrams = 0;
    let goldMinedLeva = 0;
    let bitcoinsBought = 0;
    let firstPurchaseDay = 0;
    let currentBitcoinsBought = 0;
    for (let i = 0; i < input.length; i++){
        goldMinedGrams = input[i];
        if ((i + 1) % 3 == 0){
            goldMinedGrams -= goldMinedGrams * 0.30;
        }

        goldMinedLeva += (goldMinedGrams * 67.51);

        if (goldMinedLeva >= 11949.16){
            if (bitcoinsBought == 0){
                firstPurchaseDay = i + 1;
            }
            currentBitcoinsBought = Math.floor(goldMinedLeva / 11949.16);
            bitcoinsBought += currentBitcoinsBought;
            goldMinedLeva -= (currentBitcoinsBought * 11949.16);
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if(firstPurchaseDay != 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
    }
    console.log(`Left money: ${goldMinedLeva.toFixed(2)} lv.`);
}

bitCoinMining([3124.15,504.212,2511.124]);