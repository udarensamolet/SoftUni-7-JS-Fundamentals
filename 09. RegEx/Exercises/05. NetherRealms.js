function netherRealms(tokens) {
  let input = tokens.split(/[\s,]+/);
  let patternHealth = /[^0-9\+\-\*\/\.\s]/g;
  let patternDamage = /(?<number>([\+|\-])?[0-9]+(\.[0-9]+)?)/g;
  let patternDamageArithmetics = /[*\/]/g;

  let demons = [];

  for (let line of input) {
    let demon = {};
    demon.name = line;
    let health = 0;
    let resultHealth = line.match(patternHealth);
    for (let char of resultHealth) {
      health += char.charCodeAt(0);
    }
    demon.health = health;
    let damage = 0;
    let damagesResult = line.match(patternDamage);
    if (damagesResult != null) {
      for (let dam of damagesResult) {
        damage += Number(dam);
      }
      let arithmeticOperators = line.match(patternDamageArithmetics);
      if (arithmeticOperators != null) {
        for (let i = 0; i < arithmeticOperators.length; i++) {
          if (arithmeticOperators[i] == "*") {
            damage *= 2;
          } else if (arithmeticOperators[i] == "/") {
            if (damage != 0) {
              damage /= 2;
            }
          }
        }
      }
    } else {
      demon.damage = 0;
    }
    demon.damage = damage;
    demons.push(demon);
  }

  let sortedDemons = demons.sort((a, b) => a.name.localeCompare(b.name));
  for (let demon of sortedDemons) {
    console.log(
      `${demon.name} - ${demon.health} health, ${demon.damage.toFixed(
        2
      )} damage`
    );
  }
}