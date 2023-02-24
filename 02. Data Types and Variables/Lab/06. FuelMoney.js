function fuelMoney(distance, passengers, price) {
    let neededFuel = ((7 + passengers * 0.1) * distance) / 100; 
    let finalPrice = neededFuel * price;
    console.log(`Needed money for that trip is ${finalPrice.toFixed(2)} lv.`);
}

function fuel (distance, passengers, price) {
    let increasesFuel = passengers * 0.100;
    let fuel = (distance / 100) * (7 + increasesFuel);
    let money = fuel * price;
    console.log(`Needed money for that trip is ${money.toFixed(3)} lv.`);
}