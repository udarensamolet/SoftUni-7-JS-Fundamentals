function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = 0;
    let swordExpenses = 0;
    let shieldExpenses = 0;
    let armorExpenses = 0;

    let lostSecondGames = Math.floor(lostFightsCount / 2);
    helmetExpenses = lostSecondGames * helmetPrice;

    let lostThirdGames = Math.floor(lostFightsCount / 3);
    swordExpenses = lostThirdGames * swordPrice;

    let lostSixthGames = Math.floor(lostFightsCount / 6);
    shieldExpenses = lostSixthGames * shieldPrice;

    let lostSixthSecondGames = Math.floor(lostSixthGames / 2);
    armorExpenses = lostSixthSecondGames * armorPrice;

    let allExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${allExpenses.toFixed(2)} aureus`);
}